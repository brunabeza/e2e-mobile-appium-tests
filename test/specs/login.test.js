// tests/login.test.js
describe('Login and Navigation Test', () => {
    it('should login and navigate through screens', async () => {
        const usernameField = await $('~username');
        const passwordField = await $('~password');
        const loginButton = await $('~loginBtn');

        await usernameField.setValue('testuser');
        await passwordField.setValue('password');
        await loginButton.click();

        const homeTitle = await $('~homeTitle');
        await expect(homeTitle).toBeDisplayed();

        const menuButton = await $('~menuBtn');
        await menuButton.click();

        const settingsButton = await $('~settingsBtn');
        await settingsButton.click();

        const settingsTitle = await $('~settingsTitle');
        await expect(settingsTitle).toBeDisplayed();
    });
});
