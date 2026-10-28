export class InventoryPage {
    
    constructor(page) {
        this.page = page;

        this.title = page.locator('[data-test="title"]');
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]')
        this.inventoryItems = page.locator('[data-test="inventory-item"]');
        this.addToCartButtons = page.locator('[data-test^="add-to-cart-"]');
    }

    async addItemToCart(itemName) {
        const targetCard = this.inventoryItems.filter({ hasText: itemName });

        await targetCard.locator('[data-test^="add-to-cart-"]').click();
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async getPageTitle() {
        return await this.title.textContent();
    }
}