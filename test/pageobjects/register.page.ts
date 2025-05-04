import { $ } from '@wdio/globals'
import Page from './page'

class RegisterPage extends Page {
    
    public get registerButton () {
        return $('android=new UiSelector().resourceId("br.com.alura.aluraesporte:id/login_botao_cadastrar_usuario")')
    }

    public get inputUsername () {
        return $('android=new UiSelector().resourceId("br.com.alura.aluraesporte:id/input_nome")')
    }

    public get inputPassword () {
        return $('android=new UiSelector().resourceId("br.com.alura.aluraesporte:id/input_senha")')
    }

    public get inputConfirmPassword () {
        return $('android=new UiSelector().resourceId("br.com.alura.aluraesporte:id/input_confirmar_senha")') 
    }

    public get btnSubmit () {
        return $('android=new UiSelector().resourceId("br.com.alura.aluraesporte:id/cadastro_usuario_botao_cadastrar")')
    }

    public async register (username: string, password: string, confirmPassword: string) {

        await this.waitForElementToBeVisible(this.registerButton)
        await this.registerButton.click()

        await this.waitForElementToBeVisible(this.inputUsername)
        await this.inputUsername.setValue(username)

        await this.waitForElementToBeVisible(this.inputPassword)
        await this.inputPassword.setValue(password)

        await this.waitForElementToBeVisible(this.inputConfirmPassword)
        await this.inputConfirmPassword.setValue(confirmPassword)

        await this.waitForElementToBeVisible(this.btnSubmit)
        await this.btnSubmit.click()
    }
}

export default new RegisterPage()
