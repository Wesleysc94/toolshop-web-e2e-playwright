# Estrategia de Testes

Esta etapa foi montada como a primeira camada de automacao web do portfolio.

## Como a suite foi pensada

A ideia principal foi cobrir uma trilha enxuta, mas relevante:

- um fluxo de descoberta de produto
- um fluxo de autenticacao
- um fluxo de compra
- uma validacao negativa simples e util

## Escolhas da implementacao

- uso de `Playwright`
- seletores baseados em `data-test`
- execucao contra a aplicacao real
- foco em caminhos de maior valor
- separacao entre smoke e negativo por marcadores

## O que esta validado nesta fase

- a aplicacao abre corretamente
- a busca retorna produtos coerentes com o termo informado
- o detalhe de produto exibe informacoes principais
- a autenticacao funciona com conta demo oficial
- o logout devolve a sessao para o estado esperado
- o erro de login invalido aparece na interface
- o checkout feliz pode ser concluido

## Direcao para evolucao

As proximas fases podem ampliar a cobertura com:

- filtros mais detalhados
- validacoes de favoritos
- mais cenarios negativos
- execucao em CI
- expansao para regressao critica completa

