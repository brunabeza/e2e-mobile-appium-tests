import type { ChainablePromiseElement } from 'webdriverio'

export default class Page {
    async waitForElementToBeVisible(selector: ChainablePromiseElement) {
        await selector.waitForDisplayed({ timeout: 10000 })
    }

    async tapBackButton() {
        await browser.back()
    }

    async pause(seconds: number) {
        await browser.pause(seconds * 1000)
    }

    async isElementDisplayed(selector: ChainablePromiseElement): Promise<boolean> {
        return selector.isDisplayed()
    }
}
