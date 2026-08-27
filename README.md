# 🌌 Escamb.io — Plataforma Comunitária de Trocas Sem Dinheiro Real

> Marketplace comunitário, modular e sustentável onde livros, periféricos de tecnologia, materiais e habilidades circulam livremente sem o uso de dinheiro real (0 R$).

---

## 📚 Sumário da Documentação

- 📄 **[Especificação do Produto (PRODUCT.md)](file:///C:/Users/titet/Apresenta%C3%A7%C3%A3o_IdentidadeVisual/PRODUCT.md):** Visão estratégica, público-alvo, princípios de produto, conformidade WCAG e stack tecnológica.
 sistema Void Obsidian, tipografia e diretrizes de design.
- 📜 **[Histórico e Evolução de Mudanças (HISTORICO_E_EVOLUCAO.md)](file:///C:/Users/titet/Apresenta%C3%A7%C3%A3o_IdentidadeVisual/HISTORICO_E_EVOLUCAO.md):** Registro cronológico de todas as decisões, pivots (desmonetização da moeda fictícia), refatorações e marcos técnicos.
- 🌐 **[Landing Page Oficial (index.html)](file:///C:/Users/titet/Apresenta%C3%A7%C3%A3o_IdentidadeVisual/index.html):** Interface web interativa com WebGL Shader, busca em tempo real, switch de módulos e manifesto scroll-driven.

---

## 🛠️ Estrutura do Repositório

```bash
Apresentação_IdentidadeVisual/
├── index.html                   # Landing page funcional (WebGL Shader, Tailwind, Anime.js, Lenis)
├── PRODUCT.md                   # Especificação técnica e visão de produto
├── Defesa_Identidade_Visual.md  # Defesa técnica de design e identidade visual
├── Roteiro.txt                  # Roteiro oficial de apresentação
├── HISTORICO_E_EVOLUCAO.md      # Registro cronológico completo de mudanças
├── logo.svg                     # Vetor oficial da marca (4-Diamond Cluster)
├── logomarca.jpg                # Imagem oficial da marca
├── paleta_cores.svg             # Amostra vetorial da paleta Void Obsidian
├── paleta_cores.jpg             # Amostra em imagem da paleta
├── lib/
│   ├── tokens.ts                # Tokens de design centralizados (TypeScript)
│   └── utils.ts                 # Utilitário de classes Tailwind (cn)
└── components/                  # Biblioteca de Componentes React (TypeScript)
    ├── index.ts                 # Ponto único de exportação
    └── ui/
        ├── button.tsx           # Botão modular com 6 variantes
        ├── module-card.tsx      # Card de módulo com Dot-Matrix canvas
        ├── segmented-switch.tsx # Switch animado [ ITENS | SERVIÇOS ]
        ├── text-reveal.tsx      # Manifesto com revelação por rolagem
        ├── navbar.tsx           # Header de navegação responsivo
        ├── shader-anima.tsx     # Motor de shader dinâmico em WebGL
        ├── particle-search.tsx  # Barra de busca com partículas e atalhos
        ├── developer-autocomplete.tsx # Dropdown inteligente de busca
        ├── kbd.tsx              # Badges de atalhos de teclado (/, Ctrl+K)
        ├── input-group.tsx      # Campo de entrada acessível
        └── avatar.tsx           # Identificação de usuário e reputação
```

---

## 🎨 Paleta de Cores Oficial (Void Obsidian System)

| Nome do Token | HEX / RGB | Aplicação Principal |
| :--- | :--- | :--- |
| **Void Pitch Black** | `#000000` / `#020204` | Fundo base, imersão total e economia OLED |
| **Dark Glass Card** | `#06070C` / `#0B0C13` | Superfícies com bordas `rgba(255,255,255,0.08)` |
| **Electric Cobalt Blue** | `#3B82F6` / `#2563EB` | Acento de ação, botões e foco interativo |
| **Electric Azure** | `#38BDF8` / `#0284C7` | Halos luminescentes e luz secundária |
| **Deep Indigo** | `#6366F1` | Subtons e categorias técnicas |
| **Pure White** | `#FFFFFF` | Tipografia de títulos e contraste AAA |

---

## ⚡ Como Visualizar a Landing Page

1. Abra o arquivo [index.html](file:///C:/Users/titet/Apresenta%C3%A7%C3%A3o_IdentidadeVisual/index.html) diretamente em qualquer navegador moderno.
2. Ou inicie um servidor local leve na pasta:
   ```bash
   npx serve .
   # ou
   python -m http.server 3000
   ```
3. Acesse `http://localhost:3000` no navegador.
