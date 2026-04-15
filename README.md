# 🌐 toolshop-web-e2e-playwright

> Suite de automação web E2E com Playwright cobrindo busca, autenticação e checkout.

[![Playwright](https://img.shields.io/badge/Playwright-TypeScript-2EAD33?logo=playwright&logoColor=white)]()
[![Testes](https://img.shields.io/badge/Testes-5%20aprovados-brightgreen)]()
[![Produto](https://img.shields.io/badge/Produto-Practice%20Software%20Testing-blue)](https://practicesoftwaretesting.com/)

📦 **Parte do portfolio:** [toolshop-quality-portfolio](https://github.com/Wesleysc94/toolshop-quality-portfolio)

---

## Objetivo

Automatizar os fluxos críticos de usuário da aplicação Practice Software Testing, validando que as funcionalidades essenciais (busca, autenticação, checkout) funcionam corretamente de ponta a ponta.

---

## Aplicação sob teste

| Recurso | URL |
|---|---|
| Base URL | https://practicesoftwaretesting.com/ |
| API relacionada | https://api.practicesoftwaretesting.com |

---

## Cobertura de testes

### Smoke (4 testes)

| # | Cenário | Status |
|---|---|---|
| 1 | Carregamento da home e navegação | ✅ |
| 2 | Busca por produto e abertura de detalhe | ✅ |
| 3 | Login e logout com conta demo oficial | ✅ |
| 4 | Checkout completo até confirmação de pagamento | ✅ |

### Negativo (1 teste)

| # | Cenário | Status |
|---|---|---|
| 5 | Mensagem de erro ao tentar login com credenciais inválidas | ✅ |

### Resultado da rodada (2026-04-14)

```
  5 testes executados
  5 aprovados
  0 falhas
  ────────────────
  Taxa de aprovação: 100%
```

---

## Stack utilizada

| Ferramenta | Uso |
|---|---|
| **Playwright** | Framework de automação web E2E |
| **TypeScript** | Linguagem dos testes (tipagem forte) |
| **npm** | Gerenciador de pacotes |

---

## Como executar

**Pré-requisitos:** Node.js 18+ instalado.

```bash
# 1. Clone o repositório
git clone https://github.com/Wesleysc94/toolshop-web-e2e-playwright.git
cd toolshop-web-e2e-playwright

# 2. Instale as dependências
npm install

# 3. Instale os navegadores do Playwright
npx playwright install

# 4. Execute os testes
npm run test:smoke       # Roda os testes smoke
npm run test:negative    # Roda os testes negativos
npm run test:all         # Roda tudo
```

**Comandos úteis:**

```bash
npx playwright test --headed    # Executa com navegador visível
npx playwright test --ui        # Abre a interface gráfica do Playwright
npm run report                  # Abre o relatório HTML da última execução
```

---

## Estrutura do repositório

```
toolshop-web-e2e-playwright/
├── README.md                    ← Você está aqui
├── RESUMO-DO-PROJETO.txt        ← Leitura rápida
├── 00-LEIA-PRIMEIRO.txt         ← Orientação inicial
├── playwright.config.ts         ← Configuração do Playwright
├── package.json                 ← Dependências e scripts
├── tests/                       ← Suite de testes automatizados
├── docs/
│   ├── escopo.md                ← Escopo e decisões de cobertura
│   ├── estrategia.md            ← Abordagem de automação
│   └── guia-de-revisao.md       ← Trilha pra avaliadores
├── execution-reports/           ← Relatório da rodada executada
└── evidence/                    ← Screenshots e saídas da execução
```

---

## Escopo atual vs. próximas fases

| Coberto agora | Planejado para próximas fases |
|---|---|
| ✅ Navegação e home | ⏳ Page Object Model |
| ✅ Busca por produto | ⏳ Comparação de produtos |
| ✅ Login/Logout | ⏳ Favoritos |
| ✅ Checkout completo | ⏳ Múltiplos navegadores |
| ✅ Cenário negativo de login | ⏳ CI/CD com GitHub Actions |
| | ⏳ Regressão ampliada |

---

## Como revisar

1. **[RESUMO-DO-PROJETO.txt](RESUMO-DO-PROJETO.txt)** — Visão geral rápida
2. **[docs/guia-de-revisao.md](docs/guia-de-revisao.md)** — Trilha de leitura
3. **[tests/](tests/)** — Código dos testes
4. **[execution-reports/](execution-reports/)** — Relatório da rodada
5. **[evidence/](evidence/)** — Evidências visuais

---

## O que este projeto demonstra

- **Automação de fluxos críticos** — os cenários mais importantes do e-commerce estão cobertos
- **TypeScript** — testes com tipagem forte, mais legíveis e manuteníveis
- **Playwright** — framework moderno, multiplataforma, usado no mercado
- **Execução reproduzível** — qualquer pessoa pode clonar e rodar em minutos
- **Documentação integrada** — escopo, estratégia e evidências junto com o código
