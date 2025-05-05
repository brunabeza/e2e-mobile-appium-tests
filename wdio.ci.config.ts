
exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,  // Use a variável de ambiente configurada no GitHub
    key: process.env.BROWSERSTACK_ACCESS_KEY,  // Use a variável de ambiente configurada no GitHub
    services: [
      ['browserstack', {
        browserstackLocal: true  // Permite usar BrowserStack Local, caso necessário
      }]
    ],
    capabilities: [{
      browserName: 'Android',
      platformName: 'Android',
      device: 'Google Pixel 4',  // Nome do dispositivo que você quer emular
      os_version: '10.0',  // Versão do Android
      realMobile: true,  // Usando dispositivo real
      app: 'bs://<app-id>',  // Substitua <app-id> pelo ID do seu app carregado no BrowserStack
      automationName: 'UiAutomator2'  // O nome da automação para dispositivos Android
    }],

    framework: 'mocha',
    reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],  // Relatórios usando Allure
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000  // Tempo limite para os testes
    }
}
