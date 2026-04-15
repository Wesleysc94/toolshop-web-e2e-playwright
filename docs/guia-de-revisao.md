# Guia de Revisao

## Objetivo

Este repositorio apresenta a primeira etapa de automacao web com Playwright do ecossistema **Practice Software Testing**.

O foco aqui e registrar:

- quais fluxos entraram na primeira fase
- como a suite foi organizada
- quais validacoes foram executadas
- qual foi o resultado da primeira rodada

## Ordem de leitura recomendada

1. Ler `RESUMO-DO-PROJETO.txt`.
2. Ler o `README.md`.
3. Ler `docs/escopo-da-automacao-web.md`.
4. Ler `execution-reports/2026-04-14-rodada-smoke-web-01.md`.
5. Ler `tests/smoke/home-search.spec.ts`.
6. Ler `tests/smoke/authentication.spec.ts`.
7. Ler `tests/smoke/checkout.spec.ts`.
8. Conferir as evidencias em `evidence/`.

## Aplicacao sob teste

- base URL: https://practicesoftwaretesting.com/
- API relacionada: https://api.practicesoftwaretesting.com
- referencia complementar: https://practiceautomatedtesting.com/api

## Como validar os resultados

1. Instalar dependencias com `npm install`.
2. Rodar `npx playwright install` se necessario.
3. Rodar `npm run test:smoke`.
4. Rodar `npm run test:negative`.

## Resultado atual

Na rodada registrada em `2026-04-14`, o projeto terminou com:

- `4` testes smoke aprovados
- `1` teste negativo aprovado
- `5` testes aprovados no total

## Credenciais demo usadas

As validacoes de autenticacao usam a conta demo oficial:

- email: `customer@practicesoftwaretesting.com`
- senha: `welcome01`

## Navegacao do portfolio

- portfolio principal: https://github.com/Wesleysc94/Wesleysc94
- hub do Case Study 1: https://github.com/Wesleysc94/toolshop-quality-portfolio
- Case Study 2: https://github.com/Wesleysc94/swaglab-quality-suite
