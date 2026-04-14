# toolshop-web-e2e-playwright

Projeto de automacao web E2E construido com Playwright sobre a aplicacao publica **Practice Software Testing**.

Este repositorio apresenta a primeira suite web do portfolio, com foco em navegacao, busca, autenticacao e checkout.

## Visao Geral

A proposta desta etapa foi mostrar:

- quais fluxos entraram na primeira fase
- como a automacao foi organizada
- o que foi validado na rodada inicial
- como a execucao pode ser reproduzida

## Aplicacao Sob Teste

- Base URL: https://practicesoftwaretesting.com/
- API relacionada: https://api.practicesoftwaretesting.com
- Referencia complementar: https://practiceautomatedtesting.com/api

## Escopo Da Etapa

A cobertura inicial desta suite inclui:

- carregamento da home
- busca por produto
- abertura de detalhe de produto
- login e logout
- mensagem de erro no login invalido
- adicao ao carrinho
- checkout ate a confirmacao de pagamento

Ficaram fora desta fase:

- comparacao de produtos
- favoritos
- execucao em multiplos navegadores
- CI
- regressao ampliada

## Stack Utilizada

- `TypeScript`
- `Playwright`

## Resultado Da Rodada

Na execucao registrada em `2026-04-14`:

- `4` testes smoke foram aprovados
- `1` teste negativo foi aprovado
- `5` testes foram aprovados no total
- a autenticacao foi validada com conta demo oficial
- o fluxo feliz de checkout foi concluido com sucesso

## Estrutura Do Repositorio

- [RESUMO-DO-PROJETO.txt](./RESUMO-DO-PROJETO.txt): leitura curta da etapa
- [docs/](./docs/): escopo, estrategia e guia de revisao
- [tests/](./tests/): suite automatizada com Playwright
- [execution-reports/](./execution-reports/): relatorio da rodada executada
- [evidence/](./evidence/): screenshots e saidas da execucao

## Como Executar

1. Instale as dependencias com `npm install`.
2. Rode `npx playwright install` se necessario.
3. Rode `npm run test:smoke`.
4. Rode `npm run test:negative`.

Comandos uteis:

- `npm run test:all`
- `npx playwright test --headed`
- `npx playwright test --ui`
- `npm run report`

## Como Revisar

1. Comece por [RESUMO-DO-PROJETO.txt](./RESUMO-DO-PROJETO.txt).
2. Leia [docs/guia-de-revisao.md](./docs/guia-de-revisao.md).
3. Veja os testes em [tests/](./tests/).
4. Consulte o relatorio em [execution-reports/2026-04-14-rodada-smoke-web-01.md](./execution-reports/2026-04-14-rodada-smoke-web-01.md).
5. Confira as evidencias em [evidence/](./evidence/).
