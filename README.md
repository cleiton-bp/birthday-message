# Página de Parabéns Personalizada

Uma página comemorativa de aniversário, personalizável via URL com o **nome da pessoa homenageada** e o **tema da mensagem**.

A página exibe uma mensagem afetuosa, com animações de **confetes** ou **corações flutuando**, conforme o tema escolhido.

---

## Como Usar

Basta acessar a página e passar os parâmetros na query string (após o ponto de interrogação `?`).

### Exemplos

- Tema padrão (carinhoso) — tema=1  
  Nome igual a "teste"  
  Exemplo de uso:  
  https://cleiton-bp.github.io/birthday-message/?nome=teste

- Tema romântico — tema=2  
  Nome igual a "teste" e tema igual a 2  
  Exemplo de uso:  
  https://cleiton-bp.github.io/birthday-message/?nome=teste&tema=2

- Tema amizade — tema=3  
  Nome igual a "teste" e tema igual a 3  
  Exemplo de uso:  
  https://cleiton-bp.github.io/birthday-message/?nome=teste&tema=3

---

## Parâmetros

| Parâmetro | Descrição                      | Exemplo      |
| --------- | ------------------------------ | ------------ |
| nome      | Nome da pessoa homenageada     | nome=exemplo |
| tema      | Estilo da mensagem e animações | tema=2       |

---

## Temas Disponíveis

| Tema | Descrição          | Visual                                       |
| ---- | ------------------ | -------------------------------------------- |
| 1    | Neutro / Carinhoso | Fundo animado com cores suaves e confetes    |
| 2    | Romântico          | Fundo animado rosado com corações flutuantes |
| 3    | Amizade / Alegre   | Fundo claro com confetes                     |

---

## Funcionalidades

- Nome exibido com a **primeira letra maiúscula**, automaticamente.
- Tema 2 exibe **animação de corações em tamanhos variados**.
- Temas 1 e 3 usam **confetes coloridos em loop**.
- O **favicon muda** automaticamente dependendo do tema:
  - `code-outline.svg` (temas 1 e 3)
  - `heart-outline.svg` (tema 2)

---

## Compartilhando

Envie o link no formato com os parâmetros na URL:

- `nome` igual ao nome da pessoa que receberá a mensagem
- `tema` igual ao número do tema desejado

Exemplo:

[https://cleiton-bp.github.io/birthday-message/?nome=`nome`&tema=`tema`](https://cleiton-bp.github.io/birthday-message/?nome=teste&tema=2)
