export class CheckoutCompletePage {

    constructor(page) {
        this.page = page;
        
        this.completeMessage = page.locator('[data-test="complete-header"]');
        this.backHomeButton = page.locator('button[data-test="back-to-products"]');
    }

    async getCopleteMessage() {
        return await this.completeMessage.textContent();
    }

    async goBackHome() {
        await this.backHomeButton.click();
    }
}