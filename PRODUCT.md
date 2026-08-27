# Escamb.io — Especificação e Visão de Produto

<!-- impeccable:product-schema 1 -->

## 1. Plataforma e Contexto Operacional
- **Plataforma:** Web Responsiva (Mobile, Tablet e Desktop).
- **Ambiente Operacional:** Plataforma web de alta performance construída sobre o tema **Void Midnight & Electric Cobalt Blue**, projetada para fluidez máxima, economia de energia em displays OLED e legibilidade de alto contraste.
- **Público-Alvo:** Estudantes, professores e membros da comunidade acadêmica que necessitam trocar livros didáticos, materiais de estudo, periféricos, componentes eletrônicos, roupas e prestar serviços/mentorias sem envolver dinheiro real; expansível para a comunidade externa interessada em economia circular e consumo consciente.

---

## 2. Propósito e Posicionamento do Produto
- **Propósito Central:** Oferecer uma plataforma digital de trocas colaborativas e economia circular onde qualquer pessoa pode adquirir o que necessita disponibilizando itens e habilidades parados em casa, de forma **100% desmonetizada de dinheiro real**.
- **Posicionamento de Mercado:** Marketplace comunitário e modular de trocas colaborativas com experiência de usuário cinematográfica, ágil e refinada, no padrão dos produtos digitais mais modernos do ecossistema de tecnologia.

---

## 3. Stack Tecnológica e Arquitetura

### 3.1. Front-end Core & Landing Page
- **HTML5 Semântico:** Estrutura acessível com tags semânticas completas, landmarks ARIA e `content-visibility: auto` para renderização otimizada.
- **Tailwind CSS (v3.x / JIT):** Sistema utilitário de classes configurado com a paleta customizada Void Obsidian.
- **WebGL & Canvas API:** Shader de fundo dinâmico e interativo (`shader-bg-canvas`) com animações de ondas e partículas luminescentes.
- **Anime.js (v3.2.2):** Orquestração de micro-interações, transições de elementos e animações de scroll.
- **Lenis Smooth Scroll (v1.1.20):** Rolagem com inércia cinemática suave e desaceleração natural.
- **Lucide Icons:** Biblioteca vetorial de ícones nítidos e consistentes.

### 3.2. Biblioteca de Componentes React (TypeScript)
Estruturada modularmente em `components/ui/` com tipagem estrita e utilitário `cn` (`lib/utils.ts`):
- `Button` (`components/ui/button.tsx`): Botão modular com 6 variantes (`primary`, `secondary`, `outline`, `ghost`, `glass`, `glow`) e tamanhos responsivos.
- `ModuleCard` (`components/ui/module-card.tsx`): Card de catálogo com canvas dot-matrix, badges de confiança, tags e paridade bilateral de troca.
- `SegmentedSwitch` (`components/ui/segmented-switch.tsx`): Switch deslizante com física suave para alternância instantânea entre `[ ITENS | SERVIÇOS ]`.
- `TextReveal` (`components/ui/text-reveal.tsx`): Revelação progressiva de texto por rolagem (*scroll-driven text highlight*) com realce luminescente.
- `Navbar` (`components/ui/navbar.tsx`): Header fixo com backdrop blur 2xl, logotipo em monograma, switch de categorias e CTA.
- `ShaderAnima` & `ShaderAnimaDemo` (`components/ui/shader-anima.tsx`): Efeito de shader e animações de partículas em tempo real.
- `ParticleSearch` (`components/ui/particle-search.tsx`): Barra de busca instantânea com feedback de partículas e filtro em tempo real.
- `DeveloperAutocomplete` & `Autocomplete` (`components/ui/developer-autocomplete.tsx`): Dropdown inteligente com sugestões em tempo real, contador de resultados e navegação por teclado.
- `Kbd` (`components/ui/kbd.tsx`): Badge semântico de teclas de atalho (ex: `/`, `Cmd+K`, `Esc`).
- `InputGroup` (`components/ui/input-group.tsx`): Componente de campo de entrada acessível e estilizado.
- `Avatar` (`components/ui/avatar.tsx`): Identificação de usuário com status de confiabilidade na rede.

---

## 4. Capacidades e Funcionalidades do Sistema

1. **Troca 100% Direta e Colaborativa:**
   - Transações estritamente bilaterais ou multilaterais sem moeda fiduciária ou fichas intermediárias.
   - Paridade clara entre itens/serviços anunciados e contrapartidas desejadas (0 R$).
2. **Switch Dinâmico de Modos (`[ ITENS | SERVIÇOS ]`):**
   - Filtragem instantânea do catálogo entre bens físicos (livros, eletrônicos, ferramentas) e serviços intelectuais (monitorias, design, consertos).
3. **Busca Rápida com Autocomplete e Atalhos de Teclado:**
   - Acionamento imediato ao pressionar `/` ou `Cmd/Ctrl+K`.
   - Busca em tempo real sobre títulos, tags e categorias com contagem de resultados e fallback de estado vazio amigável (`#no-results-state`).
4. **Manifesto Comunitário Scroll-Driven:**
   - Apresentação dos valores ecológicos e sociais da marca com revelação gradativa por rolagem.
5. **Onboarding e Inscrição Beta:**
   - Formulário de cadastro com validação de entrada, feedback visual e suporte a leitores de tela (`aria-live="polite"`).

---

## 5. Compromissos de Marca e Design System

- **Nome Oficial:** Escamb.io
- **Monograma & Logomarca:** Símbolo geométrico em cluster de 4 diamantes (4-Diamond Cluster) com gradiente cobalto/azure, simbolizando circulação contínua e precisão modular.
- **Tokens de Cores (`lib/tokens.ts`):**
  - **Fundo Base:** Void Pitch Black (`#000000` / `#020204`)
  - **Superfícies & Cards:** Dark Glass Surface (`#06070C` / `#0B0C13`) com bordas translúcidas `rgba(255,255,255,0.08)` e hover `rgba(59,130,246,0.45)`
  - **Acento Primário:** Electric Cobalt Blue (`#3B82F6` / `#2563EB`)
  - **Acento Secundário:** Electric Azure (`#38BDF8` / `#0284C7`)
  - **Subtons:** Deep Indigo (`#6366F1`) e Âmbar de Destaque (`#F59E0B`)
  - **Tipografia:** Pure White (`#FFFFFF`), Slate Light (`#94A3B8`) e Slate Muted (`#64748B`)
- **Tipografia Selecionada:**
  - *Títulos e Display:* `Syne` e `Space Grotesk`
  - *Elementos Técnicos e Badges:* `JetBrains Mono`
  - *Corpo e Leitura:* `Inter`

---

## 6. Princípios do Produto

1. **Zero Moeda Real e Zero Fricção:** O ecossistema promove sustentabilidade e economia solidária genuína, sem barreiras financeiras.
2. **O Produto/Módulo em Primeiro Lugar:** Hierarquia visual clara com foco nas características dos itens e habilidades ofertadas.
3. **Desempenho e Eficiência Energética:** Código leve, recursos otimizados, baixa sobrecarga de CPU/GPU e alta eficiência em telas OLED.
4. **Transparência e Confiabilidade:** Indicadores comunitários de reputação, pontos seguros de encontro e regras de troca explícitas.

---

## 7. Acessibilidade, Inclusão e Performance

- **Conformidade WCAG AA/AAA:** Relação de contraste rigorosamente calibrada entre texto e fundo escuro.
- **Navegação por Teclado:** Foco visível com anéis de luz cobalto (`#3B82F6`) em todos os elementos interativos.
- **Prefers Reduced Motion:** Desativação de efeitos pesados quando o usuário preferir movimentos reduzidos no sistema operacional.
- **Otimização de Core Web Vitals:** Resource hints (`preconnect`, `dns-prefetch`) para fontes e CDNs, imagens responsivas e isolamento com `contain-intrinsic-size`.
