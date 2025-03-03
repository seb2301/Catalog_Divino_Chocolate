# Divino Chocolate Doces Finos

Este projeto é um **site estático** desenvolvido para apresentar os serviços e produtos da confeitaria **Divino Chocolate Doces Finos**, especializada em doces finos para casamento. O layout foi pensado para ser **responsivo**, especialmente em dispositivos móveis, com design elegante e moderno, fazendo uso de um **tema escuro** e **transições suaves**.

---

## Estrutura de Pastas e Arquivos

```
meu-projeto/
├── index.html                   (Página Inicial)
├── mesas-de-doces.html         (Página de Mesas de Doces)
├── cardapio.html               (Página de Cardápio)
├── informacoes-importantes.html (Página de Informações Importantes)
├── contato.html                (Página de Contato)
├── styles.css                  (Arquivo de estilo principal)
└── script.js                   (Lógica de carrossel e possíveis animações)
```

1. **`index.html`**  
   - Página inicial com foto/hero e apresentação sobre a confeiteira, explicando os diferenciais e a experiência em doces finos.  
   - Animações suaves de aparição (slide-in-left) para fotos e textos.  

2. **`mesas-de-doces.html`**  
   - Apresenta um **carrossel** de 10 fotos (ou mais) demonstrando exemplos de mesas de doces prontas.  
   - O carrossel é responsivo, com script de transição automática (autoplay) ou botões de navegação (`prev` e `next`).  

3. **`cardapio.html`**  
   - Mostra 30 espaços (cards) para doces, cada um com **nome** e **descrição**.  
   - Dispostos em um **grid responsivo**, permitindo ajustes para diferentes tamanhos de tela.  

4. **`informacoes-importantes.html`**  
   - Lista de informações relevantes para pedidos (ex.: limites de entrega, pagamento, taxas, número mínimo de doces, etc.).  

5. **`contato.html`**  
   - Exibe dados para **Instagram** e **WhatsApp**, além de uma imagem da confeiteira.  
   - Centraliza as informações de forma organizada, com links clicáveis para as redes sociais.  

6. **`styles.css`**  
   - Arquivo de estilos principal, contendo:  
     - Variáveis de cor (modo escuro, destaques em tom dourado).  
     - Responsividade para telas menores.  
     - Classes para animações suaves (fade, slide-in-left).  
     - Configuração para manter o **menu fixo** no topo e o **rodapé fixo** embaixo.  
     - Reservas de espaçamento (`padding-top` e `padding-bottom`) para que nada seja encoberto.

7. **`script.js`**  
   - Lógica do carrossel (transição automática e botões “prev” e “next”).  
   - Pode conter animações adicionais, caso necessárias.

---

## Como Utilizar

1. **Clone ou Baixe** este repositório.  
2. Abra o arquivo `index.html` em seu **navegador** para visualizar a página inicial.  
   - Você pode navegar pelas demais páginas pelos links do **menu** (Início, Mesas de Doces, Cardápio, etc.).  
3. Para melhor desenvolvimento e testes locais, utilize um **servidor local** (por exemplo, extensões como “Live Server” no VS Code) para que as imagens e scripts carreguem adequadamente.

---

## Personalização

- **Cores e Fontes**:  
  - Ajuste no `styles.css`, especialmente nas variáveis `--cor-fundo-principal`, `--cor-texto`, `--cor-destaque`, e a `font-family` importada do Google Fonts.  
- **Imagens**:  
  - Substitua as imagens nos caminhos adequados (pasta `images/` ou outro local).  
  - Ajuste nome e extensão conforme necessário no HTML.  
- **Textos**:  
  - Você pode editar livremente os textos em cada página para refletir informações reais sobre a confeitaria, cardápio, informações e contato.  
- **Carrossel**:  
  - No `script.js`, ajuste o `setInterval()` para mudar a velocidade de autoplay.  
  - Se preferir um carrossel mais avançado (swipe, indicadores), pode usar bibliotecas como **Swiper.js** ou **Slick**.

---

## Dicas e Observações

- Caso o **menu** ou o **rodapé** “tampe” parte do conteúdo, ajuste os valores de `padding-top` e `padding-bottom` no `body`. Esses valores devem ser iguais ou maiores que a **altura real** do menu e do rodapé fixos.  
- Se ainda assim tiver cortes de conteúdo, verifique se existe alguma `height:` fixa declarada no menu ou rodapé. Retire-a se quiser que a altura se ajuste automaticamente ao conteúdo.  
- Para publicar em produção, basta fazer o **deploy estático** (por exemplo, via GitHub Pages, Netlify, Vercel ou servidor próprio).

---

## Licença

Este projeto pode ser adaptado ou ampliado livremente, de acordo com as necessidades do cliente ou da confeiteira responsável. Caso utilize partes deste código em outros projetos, cite a autoria e mantenha os créditos conforme acordado.