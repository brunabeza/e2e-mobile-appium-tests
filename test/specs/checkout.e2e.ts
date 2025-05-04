import { expect } from '@wdio/globals'
import RegisterPage from '../pageobjects/register.page'
import LoginPage from '../pageobjects/login.page'
import CheckoutPage from '../pageobjects/checkout.page'
import { users } from '../../data/users.data'
import { card } from '../../data/checkout.data'

describe('Checkout Test', () => {
    it('should complete a purchase successfully', async () => {
        await RegisterPage.register(users.validUser.username, users.validUser.password, users.validUser.password)
        await LoginPage.login(users.validUser.username, users.validUser.password)

        await CheckoutPage.selectProduct()
        await CheckoutPage.tapBuyButton()
        await CheckoutPage.fillPaymentForm(card.validCard.number, card.validCard.expiry, card.validCard.cvc)
        
        await expect(CheckoutPage.confirmPaymentButton).toBeDisplayed()
    })
})
