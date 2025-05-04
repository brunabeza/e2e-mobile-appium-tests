export const config: WebdriverIO.Config = {
    runner: 'local',
    specs: ['./test/specs/**/*.ts'],
    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '14',
        'appium:automationName': 'UiAutomator2',
        'appium:app': './apps/ApiDemos-debug.apk',
        'appium:autoGrantPermissions': true
    }],

    services: [
        ['appium', {
            args: {
                // Você pode adicionar argumentos do Appium aqui
                // por exemplo: "--relaxed-security"
            },
            command: 'appium'
        }]
    ],

    framework: 'mocha',
    reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
