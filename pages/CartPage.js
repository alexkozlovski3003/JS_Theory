export class CartPage {

    constructor(page) {
        this.page = page;

        this.cartItems = page.locator('[data-test="inventory-item"]');
        this.checkOutButton = page.locator('button[data-test="checkout"]');
        this.continueShoppingButton = page.locator('button[data-test="continue-shopping"]');
    }

    async goToCheckout() {
        await this.checkOutButton.click();
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }

    async getCartItems() {
        return await this.cartItems.allTextContents();
    }
}