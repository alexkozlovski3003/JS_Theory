//@ts-check
import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import {CartPage} from '../pages/CartPage';
import {CheckoutStepOnePage} from '../pages/CheckoutStepOnePage';
import {CheckoutStepTwoPage} from '../pages/CheckoutStepTwoPage';
import {CheckoutCompletePage} from '../pages/CheckoutCompletePage';

test.describe('E2E test of Sauce Demo', () => {
    test('User can complete the full purchase process', async ({page}) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutStepOnePage = new CheckoutStepOnePage(page);
        const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
        const checkoutCompletePage = new CheckoutCompletePage(page);

        // 1.
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');

        // 2.
        await expect(inventoryPage.title).toHaveText('Products');

        // 3.
        await inventoryPage.filterItems('hilo');

        // 4.
        const mostExpensiveItemName = await inventoryPage.inventoryItems.first().locator('[data-test="inventory-item-name"]').textContent();

        // 5.
        await inventoryPage.addItemToCart(mostExpensiveItemName);

        //6.
        await inventoryPage.openCart();

        await expect(cartPage.cartItems).toHaveText(mostExpensiveItemName);

        //7.
        await cartPage.goToCheckout();

        //8.
        await checkoutStepOnePage.fillUserInfo('Alex', 'Normalex', '4238');

        //9.
        await checkoutStepTwoPage.finishCheckout();

        //10.
        await expect(checkoutCompletePage.completeMessage).toHaveText('Thank you for your order!')
    });
});