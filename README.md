# 🌐 toolshop-web-e2e-playwright

> Suite de automação web E2E com Playwright cobrindo busca, autenticação e checkout.

[![Playwright](https://img.shields.io/badge/Playwright-TypeScript-2EAD33?logo=playwright&logoColor=white)]()
[![Testes](https://img.shields.io/badge/Testes-5%20aprovados-brightgreen)]()
[![Produto](https://img.shields.io/badge/Produto-Practice%20Software%20Testing-blue)](https://practicesoftwaretesting.com/)

🔎 **Portfolio principal:** [Wesleysc94](https://github.com/Wesleysc94/Wesleysc94)
📦 **Case Study 1:** [toolshop-quality-portfolio](https://github.com/Wesleysc94/toolshop-quality-portfolio)

---

## Objetivo

Automatizar fluxos críticos de usuário na aplicação Practice Software Testing, validando que funcionalidades essenciais funcionam corretamente de ponta a ponta.

---

## Aplicação sob teste

| Recurso | URL |
|---|---|
| Base URL | https://practicesoftwaretesting.com/ |
| API relacionada | https://api.practicesoftwaretesting.com |

---

## Escopo

### Smoke

| # | Cenário | Status |
|---|---|---|
| 1 | Carregamento da home e navegação | ✅ |
| 2 | Busca por produto e abertura de detalhe | ✅ |
| 3 | Login e logout com conta demo oficial | ✅ |
| 4 | Checkout completo até confirmação de pagamento | ✅ |

### Cenário negativo

| # | Cenário | Status |
|---|---|---|
| 5 | Mensagem de erro ao tentar login com credenciais inválidas | ✅ |

---

## Resultado da rodada

```
  5 testes executados
  5 aprovados
  0 falhas
  ----------------
  Taxa de aprovação: 100%
```

Rodada registrada em 2026-04-14.

---

## Stack utilizada

| Ferramenta | Uso |
|---|---|
| **Playwright** | framework de automação web E2E |
| **TypeScript** | linguagem dos testes |
| **npm** | gerenciamento de dependências e scripts |

---

## Como executar

**Pré-requisitos:** Node.js 18+ instalado.

```bash
git clone https://github.com/Wesleysc94/toolshop-web-e2e-playwright.git
cd toolshop-web-e2e-playwright

npm install
npx playwright install

npm run test:smoke
npm run test:negative
npm run test:all
```

**Comandos úteis:**

```bash
npx playwright test --headed
npx playwright test --ui
npm run report
```

---

## Como revisar

1. Leia o [RESUMO-DO-PROJETO.txt](RESUMO-DO-PROJETO.txt)
2. Consulte o [docs/guia-de-revisao.md](docs/guia-de-revisao.md)
3. Revise os testes em [tests/](tests/)
4. Confira o relatório em [execution-reports/](execution-reports/)
5. Veja as evidências em [evidence/](evidence/)

---

## O que este projeto entrega

- **Automação de fluxos críticos** — foco no que mais impacta o usuário
- **Playwright com TypeScript** — stack moderna para automação web
- **Cobertura objetiva** — smoke + cenário negativo
- **Execução rápida** — qualquer avaliador pode clonar e rodar a suíte em poucos passos
