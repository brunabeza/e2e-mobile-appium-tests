import { Config } from '@wdio/types';

export const config: Config = {
    runner: 'local',
    specs: ['./test/specs/**/*.ts'],
    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '14',
        'appium:automationName': 'UiAutomator2',
        'appium:app': './apps/alura_esporte.apk',
        'appium:autoGrantPermissions': true
    }],

    services: [
        ['appium', { 
            args: { 
                "--relaxed-security": true 
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
};
