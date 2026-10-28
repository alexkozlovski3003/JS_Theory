export class CheckoutStepTwoPage {

    constructor(page) {
        this.page = page;
        
        this.checkoutSummary = page.locator('[data-test="checkout-summary-container"]');
        this.totalPrice = page.locator('[data-test="total-label"]');
        this.finishButton = page.locator('button[data-test="finish"]');
    }

    async getSummaryText() {
        return await this.checkoutSummary.textContent();
    }

    async getTotalPriceText() {
        return await this.totalPrice.textContent();
    }

    async finishCheckout() {
        await this.finishButton.click();    
    }
}