import { expect } from '@wdio/globals'
import RegisterPage from '../pageobjects/register.page'
import LoginPage from '../pageobjects/login.page'
import { users } from '../../data/users.data'

describe('Register and Login Test', () => {
    it('should register a user and then login and validate welcome message', async () => {
    
        await RegisterPage.register(users.validUser.username, users.validUser.password, users.validUser.password)
        await LoginPage.login(users.validUser.username, users.validUser.password)

        await expect(LoginPage.itenSailing).toBeDisplayed()
    })
})
