# Relatorio de Execucao - Rodada Smoke Web 01

## Visao geral

Primeira rodada automatizada executada contra a aplicacao web real do ecossistema **Practice Software Testing**.

## Data

- `2026-04-14`

## Ambiente

- Base URL: `https://practicesoftwaretesting.com/`
- Ferramenta: `Playwright`
- Linguagem: `TypeScript`
- Navegador usado na rodada: `Chromium`

## Suite executada

- `npm run test:smoke`
- `npm run test:negative`

## Resultado

- Smoke: `4` aprovados em `39.9s`
- Negativo: `1` aprovado em `10.8s`
- Total: `5` aprovados

## Cobertura validada nesta rodada

- busca por produto
- detalhe de produto
- login
- logout
- mensagem de erro no login invalido
- adicao ao carrinho
- checkout ate a confirmacao de pagamento

## Evidencias

- `evidence/2026-04-14-rodada-smoke-web/playwright-smoke.txt`
- `evidence/2026-04-14-rodada-smoke-web/playwright-negative.txt`
- `evidence/2026-04-14-rodada-smoke-web/01-home-busca.png`
- `evidence/2026-04-14-rodada-smoke-web/01b-detalhe-produto.png`
- `evidence/2026-04-14-rodada-smoke-web/02-login-sucesso.png`
- `evidence/2026-04-14-rodada-smoke-web/03-login-invalido.png`
- `evidence/2026-04-14-rodada-smoke-web/04-checkout-sucesso.png`

## Conclusao

A primeira etapa da suite web com Playwright foi concluida com sucesso na rodada registrada.

O projeto ficou com uma base E2E simples, legivel e reproduzivel, pronta para crescer nas proximas fases com mais filtros, regressao ampliada e integracao em pipeline.
