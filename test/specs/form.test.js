// tests/form.test.js
describe('Form Submission Test', () => {
    it('should fill and submit a form', async () => {
        const nameField = await $('~nameField');
        const emailField = await $('~emailField');
        const submitButton = await $('~submitBtn');

        await nameField.setValue('Bruna Silva');
        await emailField.setValue('bruna@example.com');
        await submitButton.click();

        const successMessage = await $('~successMessage');
        await expect(successMessage).toBeDisplayed();
    });
});
