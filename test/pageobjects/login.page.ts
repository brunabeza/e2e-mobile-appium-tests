import { $ } from '@wdio/globals'
import Page from './page'

class LoginPage extends Page {
    public get inputUsername () {
        return $('android=new UiSelector().resourceId("br.com.alura.aluraesporte:id/input_usuario")')
    }
    
    public get inputPassword () {
        return $('android=new UiSelector().resourceId("br.com.alura.aluraesporte:id/input_senha")')
    }
    
    public get inputConfirmPassword () {
        return $('android=new UiSelector().resourceId("br.com.alura.aluraesporte:id/input_confirmacao_senha")')
    }
    
    public get btnSubmit () {
        return $('android=new UiSelector().resourceId("br.com.alura.aluraesporte:id/login_botao_logar")')
    }

    public get itenSailing () {
        return $('android=new UiSelector().resourceId("br.com.alura.aluraesporte:id/item_produto_nome")')
    }

    public async login (username: string, password: string) {
        await this.waitForElementToBeVisible(this.inputUsername)
        await this.inputUsername.setValue(username)

        await this.waitForElementToBeVisible(this.inputPassword)
        await this.inputPassword.setValue(password)

        await this.waitForElementToBeVisible(this.btnSubmit)
        await this.btnSubmit.click()
        
        await this.waitForElementToBeVisible(this.itenSailing)
    }
}

export default new LoginPage()
