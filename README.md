# 🛒 Lista de Compras

Uma aplicação web simples e intuitiva para organizar suas compras semanais. Desenvolvida com HTML, CSS e JavaScript puro, com foco em manipulação do DOM.

## Funcionalidades

- **Adicionar itens**: Digite o nome do item e clique em "Adicionar item"
- **Marcar como comprado**: Use o checkbox para marcar itens já adquiridos (com visual destacado)
- **Remover itens**: Clique no ícone de lixeira para deletar um item da lista
- **Alertas**: Notificação ao remover um item com opção de fechar

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos responsivos com variáveis CSS
- **JavaScript**: Manipulação dinâmica do DOM
- **Google Fonts**: Tipografia Inter

## 📁 Estrutura do Projeto

```
shopping-list/
├── index.html          # Página principal
├── script.js           # Lógica da aplicação (manipulação do DOM)
├── styles/
│   ├── global.css      # Estilos globais e variáveis CSS
│   └── style.css       # Estilos específicos
└── assets/             # Ícones e imagens
```

## Design Responsivo

A aplicação é totalmente responsiva e funciona bem em:
- Dispositivos móveis (< 768px)
- Tablets e desktops (≥ 768px)

## Como Usar

1. Abra o site
2. Digite um item no campo de entrada
3. Clique em "Adicionar item" ou pressione Enter
4. Interaja com os itens:
   - Clique no checkbox para marcar como comprado
   - Clique na lixeira para remover

## Principais Operações com DOM

- `document.querySelector()`: Seleção de elementos
- `document.createElement()`: Criação dinâmica de elementos
- `appendChild()` e `append()`: Inserção de elementos
- `addEventListener()`: Escuta de eventos (click, change)
- `classList`: Manipulação de classes CSS
- `closest()`: Navegação na árvore do DOM
