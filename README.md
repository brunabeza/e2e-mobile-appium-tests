# 🤖 Projeto de Testes Mobile com WebdriverIO + Appium + Allure

Este projeto automatiza testes E2E em um app mobile Android utilizando **WebdriverIO**, **Appium** e geração de relatórios com **Allure**.

---

## 📦 Tecnologias Utilizadas

- [WebdriverIO](https://webdriver.io/)
- [Appium](https://appium.io/)
- [Allure Reporter](https://docs.qameta.io/allure/)
- Node.js
- TypeScript

---

## 📁 Estrutura de Pastas

```
.
├── data/                  # Dados de teste
│   └── users.data.ts
├── tests/
│   └── specs/             # Casos de teste
├── pageobjects/           # Page Objects reutilizáveis
│   ├── login.page.ts
│   └── checkout.page.ts
├── wdio.conf.ts           # Configuração do WebdriverIO
├── allure-results/        # Gerado automaticamente após execução
└── allure-report/         # Relatório HTML gerado
```

---

## 🚀 Como Executar os Testes

1. Instale as dependências:
```bash
npm install
```

2. Inicie o Appium:
```bash
npx appium
```

3. Execute os testes:
```bash
npx wdio run wdio.conf.ts
```

---

## 📊 Gerar Relatório Allure

1. Após rodar os testes, gere o relatório:
```bash
npm run report
```

2. Isso abrirá automaticamente o relatório no navegador.

> Certifique-se que a pasta `allure-results` foi criada durante a execução dos testes.

![image](https://github.com/user-attachments/assets/f04db81a-9174-44e0-ade2-486d4add7fcb)

---

## 📜 Scripts disponíveis

Adicione ao seu `package.json`:

```json
"scripts": {
  "test": "wdio run wdio.conf.ts",
  "report": "allure generate allure-results --clean -o allure-report && allure open allure-report"
}
```

---

## 🧪 Testes Implementados

- Login de usuário
- Checkout com erro de pagamento

---

## 🛠 Pré-requisitos

- Node.js (versão 16 ou superior)
- Java JDK 11+
- Android SDK configurado
- Emulador ou dispositivo físico
- Appium (`npm install -g appium`)
- Allure CLI (`npm install -g allure-commandline`)


