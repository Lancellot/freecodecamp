# 💰 Projeto Caixa Registradora

Este é um projeto de simulação de **Caixa Registradora** desenvolvido com HTML, CSS e JavaScript. A aplicação recebe o valor de um item, o valor pago pelo cliente e simula o retorno do troco com base no dinheiro disponível no caixa.

## 🧠 Objetivo

O objetivo principal deste projeto é aplicar conceitos de lógica de programação e manipulação de DOM com JavaScript, além de seguir as regras de um sistema de troco realista, incluindo situações como:

- Troco exato
- Troco com múltiplas denominações
- Falta de dinheiro suficiente no caixa
- Caixa fechado (sem saldo restante após o troco)

## 📸 Demonstração

> Em breve: [link para demonstração ao vivo](#)

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript Puro (Vanilla JS)

## 🔁 Lógica de Funcionamento

A lógica do projeto simula um sistema real de troco. Ao clicar no botão "Finalizar Compra":

1. Verifica se o valor pago é suficiente.
2. Calcula o troco necessário.
3. Compara o valor do troco com o valor disponível no caixa (`cid`).
4. Retorna:
   - `Status: OPEN` e as cédulas/moedas utilizadas.
   - `Status: CLOSED` quando o troco consome todo o caixa.
   - `Status: INSUFFICIENT_FUNDS` quando o troco não pode ser fornecido.

## ✅ Testes Passados

Este projeto foi desenvolvido com base nos testes do FreeCodeCamp, garantindo:

- Troco correto em ordem decrescente
- Precisão de casas decimais
- Manipulação de diferentes cenários

## 🧪 Exemplos de Testes

- Preço: `19.5`, Pago: `20`, Caixa: com moedas suficientes  
  **Resultado esperado:** `Status: OPEN QUARTER: $0.5`

- Preço: `19.5`, Pago: `20`, Caixa: com exatamente `0.5` em `PENNY`  
  **Resultado esperado:** `Status: CLOSED PENNY: $0.5`

- Preço: `3.26`, Pago: `100`, Caixa cheio  
  **Resultado esperado:** `Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04`


