import { $ } from '@wdio/globals'
import Page from './page'

class CheckoutPage extends Page {
    public get productItem() {
        return $('android=new UiSelector().resourceId("br.com.alura.aluraesporte:id/item_produto_nome")')
    }

    public get buyButton() {
        return $('android=new UiSelector().resourceId("br.com.alura.aluraesporte:id/detalhes_produto_botao_comprar")')
    }

    public get cardNumberField() {
        return $('android=new UiSelector().text("Número cartão")')
    }

    public get cardExpiryField() {
        return $('android=new UiSelector().text("Data de validade")')
    }

    public get cardCvcField() {
        return $('android=new UiSelector().text("CVC")')
    }

    public get confirmPaymentButton() {
        return $('android=new UiSelector().resourceId("br.com.alura.aluraesporte:id/pagamento_botao_confirma_pagamento")')
    }

    public get paymentSuccessLabel() {
        return $('android=new UiSelector().resourceId("br.com.alura.aluraesporte:id/smallLabel")')
    }

    public get paymentErrorMessage() {
        return $('android=new UiSelector().text("Falha ao criar pagamento")')
    }

    public async selectProduct() {
        await this.waitForElementToBeVisible(this.productItem)
        await this.productItem.click()
    }

    public async tapBuyButton() {
        await this.waitForElementToBeVisible(this.buyButton)
        await this.buyButton.click()
    }

    public async fillPaymentForm(cardNumber: string, expiry: string, cvc: string) {
        await this.waitForElementToBeVisible(this.cardNumberField)
        await this.cardNumberField.setValue(cardNumber)

        await this.waitForElementToBeVisible(this.cardExpiryField)
        await this.cardExpiryField.setValue(expiry)

        await this.waitForElementToBeVisible(this.cardCvcField)
        await this.cardCvcField.setValue(cvc)
    }

    public async confirmPayment() {
        await this.waitForElementToBeVisible(this.confirmPaymentButton)
        await this.confirmPaymentButton.click()
    }

    public async validateError() {
        await this.waitForElementToBeVisible(this.paymentErrorMessage)
        return this.isElementDisplayed(this.paymentErrorMessage)
    }
}

export default new CheckoutPage()
