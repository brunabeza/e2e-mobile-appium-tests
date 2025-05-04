import { expect } from '@wdio/globals'


describe('Login Test', () => {
    it('should login and validate welcome message', async () => {
      const loginBtn = await $('~Login')
      await loginBtn.click()
  
      const username = await $('~Username')
      const password = await $('~Password')
      const submit = await $('~LoginButton')
  
      await username.setValue('admin')
      await password.setValue('admin123')
      await submit.click()
  
      const successMsg = await $('~WelcomeMessage')
      await expect(successMsg).toBeDisplayed()
    })
  })
  

