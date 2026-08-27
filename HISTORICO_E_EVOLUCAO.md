# 📜 Histórico Completo de Alterações e Evolução do Projeto: Escamb.io

Este documento detalha cronologicamente todas as mudanças, decisões arquiteturais, evoluções conceituais e melhorias técnicas implementadas no projeto **Escamb.io** desde a sua concepção inicial até o estado atual.

---

## 🧭 Linha do Tempo e Fases do Projeto

### Fase 1: Concepção Inicial e Definição do Escopo (Ideia Base)
* **Objetivo:** Responder à proposta acadêmica de criar um marketplace/e-commerce comunitário para troca de itens escolares e didáticos sem uso de dinheiro real.
* **Modelo Inicial Cogitado:** 
  - Criação de uma moeda virtual interna fictícia chamada **"Cambi" (símbolo ◈)**.
  - O usuário ganhava saldo ao cadastrar itens e gastava em itens de outros usuários.
* **Primeira Paleta de Cores Esboçada:** 
  - Fundo claro/slate (`#F8FAFC` / `#0F172A`).
  - Verde Esmeralda (`#10B981`) para representar sustentabilidade.
  - Azul Índigo (`#4F46E5`) para segurança.
  - Âmbar Dourado (`#F59E0B`) para a moeda Cambi.
* **Naming:** 
  - Análise comparativa entre *Escambo*, *Skamboo*, *Xcambo* e *Escamb.io*.
  - Definição unânime de **Escamb.io** pela memorabilidade imediata somada à autoridade do TLD tecnológico `.io`.

---

### Fase 2: Pivot Estratégico — Desmonetização Total (Zero Moeda / 0 R$)
* **Identificação do Problema:** A criação de uma moeda virtual ("Cambi") traria atrito de precificação, risco de inflação descontrolada no banco de dados e distanciamento do conceito puro de economia circular e colaborativa.
* **Solução & Decisão:** 
  - Eliminação completa da moeda virtual.
  - Adoção da **Troca 100% Direta e Colaborativa com Paridade Bilateral (Zero Moeda / 0 R$)**.
  - Expansão do catálogo para dois pilares fundamentais através de **Módulos**:
    1. **Itens Físicos:** Livros didáticos, periféricos, componentes de hardware, materiais artísticos, roupas.
    2. **Serviços & Habilidades:** Monitorias de cálculo/programação, manutenção de computadores, design gráfico, tradução.

---

### Fase 3: Revolução Visual — Sistema Void Midnight & Electric Cobalt Blue
* **Ruptura de Design:** Abandono do visual claro tradicional por um design de alto impacto, ultra-moderno e focado em desenvolvedores (*Developer-Centric / Cyber-Modular*).
* **Novo Design System Oficial (`lib/tokens.ts`):**
  - **Void Pitch Black (`#000000` / `#020204`):** Fundo preto puro para imersão total, eliminação de reflexos e economia real de energia em telas OLED.
  - **Dark Glass Surface (`#06070C` / `#0B0C13`):** Cards e superfícies escuras com micro-bordas de luz `rgba(255,255,255,0.08)` e efeito translúcido (*frosted glass*).
  - **Electric Cobalt Blue (`#3B82F6` / `#2563EB`):** Acento primário de autoridade técnica, contraste e ação.
  - **Electric Azure (`#38BDF8` / `#0284C7`):** Acento secundário para iluminação de halos atmosféricos.
  - **Deep Indigo (`#6366F1`):** Subtons de profundidade para tags e categorias.
  - **Tipografia:** `Syne` e `Space Grotesk` (títulos monumentais), `JetBrains Mono` (UI técnica e badges) e `Inter` (corpo e leitura fluida).
* **Ativos Vetoriais Oficiais:**
  - `logo.svg` & `logomarca.jpg`: Símbolo geométrico **4-Diamond Cluster** com gradiente azul cobalto e azure, representando os 4 eixos de circulação comunitária.
  - `paleta_cores.svg` & `paleta_cores.jpg`: Especificação vetorial dark da paleta oficial.

---

### Fase 4: Desenvolvimento da Landing Page Cinematográfica (`index.html`)
Construção de uma experiência completa de front-end, altamente responsiva e interativa:
1. **WebGL Shader Background:**
   - Canvas de fundo interativo (`#shader-bg-canvas`) renderizando ondas fluidas e gradientes de luz dinâmicos em tempo real sem degradação de FPS.
2. **Navegação & Segmented Pill Switch:**
   - Header fixo com efeito *backdrop blur 2xl*.
   - Switch segmentado `[ ITENS | SERVIÇOS ]` com pílula animada e filtragem em tempo real do catálogo sem recarregar a página.
3. **Hero Section Monumental:**
   - Tipografia geométrica de alta escala, sublinhado dinâmico e botões pílula de ação rápida (`COMEÇAR • 0 R$` e `COMO FUNCIONA`).
4. **Motor de Busca Instantânea com Autocomplete (`particle-search`):**
   - Atalhos de teclado globais (`/` e `Cmd/Ctrl+K`) que focam instantaneamente o campo de pesquisa.
   - Dropdown inteligente com contagem de módulos encontrados, categorização por tags e estado de busca vazia amigável (`#no-results-state`).
5. **Catálogo de Módulos Dot-Matrix Constellation:**
   - Cards com visualizador superior em malha de micro-pontos luminosos (`.dot-matrix-canvas`).
   - Badges de confiabilidade comunitária (★ 4.9), tags de tecnologia e indicação clara da paridade de escambo 1:1.
6. **Manifesto Scroll-Driven (`@beui/text-reveal`):**
   - Seção interativa em que cada palavra do manifesto de sustentabilidade se ilumina conforme o usuário desliza a página.
7. **Como Funciona Modular & Onboarding Beta:**
   - 3 passos claros e numerados com isolamento de renderização (`content-visibility: auto`).
   - Formulário de acesso antecipado com validação e retorno acessível (`aria-live="polite"`).
8. **Inertia Smooth Scroll:**
   - Integração da biblioteca *Lenis* para rolagem fluida e cinemática.

---

### Fase 5: Modularização da Biblioteca de Componentes React (`components/`)
Transformação dos elementos da interface em componentes reutilizáveis, desacoplados e fortemente tipados com TypeScript:
- `components/ui/button.tsx`: 6 variantes (`primary`, `secondary`, `outline`, `ghost`, `glass`, `glow`) e micro-interações.
- `components/ui/module-card.tsx`: Card do módulo com canvas dot-matrix e detalhes de troca.
- `components/ui/segmented-switch.tsx`: Switch animado de alternância entre modos de catálogo.
- `components/ui/text-reveal.tsx`: Componente de revelação progressiva por scroll.
- `components/ui/navbar.tsx`: Header de navegação responsivo.
- `components/ui/shader-anima.tsx` & `shader-anima-demo.tsx`: Motor de renderização de shaders WebGL.
- `components/ui/particle-search.tsx`: Barra de pesquisa instantânea com feedback de partículas.
- `components/ui/developer-autocomplete.tsx` & `autocomplete.tsx`: Autocompletar inteligente com atalhos de teclado.
- `components/ui/kbd.tsx`: Badges de atalhos de teclado.
- `components/ui/input-group.tsx`: Campos de entrada acessíveis.
- `components/ui/avatar.tsx`: Identificação visual de membros da comunidade.
- `lib/tokens.ts`: Centralização dos tokens de design Void Obsidian.
- `lib/utils.ts`: Utilitário `cn` com `clsx` e `tailwind-merge`.
- `components/index.ts`: Ponto único de exportação da biblioteca.

---

### Fase 7: Sistema Tipográfico 100% Sans-Serif & Otimização Mobile Extrema
* **Arquitetura Tipográfica Sans-Serif Total:**
  - Eliminação completa de qualquer fallback com fontes serifadas (como *Times New Roman*).
  - Implementação de stacks de fallback universais 100% sans-serif baseadas em `system-ui`, `-apple-system`, `BlinkMacSystemFont`, `'Segoe UI'`, `Roboto`, `'Helvetica Neue'`, `Arial`, `'Franklin Gothic Medium'`, `'Arial Narrow'`, `'Trebuchet MS'`.
  - Atualização dos tokens de design (`lib/tokens.ts`) e da configuração do Tailwind / CSS Global (`index.html`).
* **Engenharia de Responsividade Mobile-First:**
  - Viewport configurada com `viewport-fit=cover` e variáveis CSS para Safe Areas de entalhe/notch (`--sat`, `--sab`, `--sal`, `--sar`).
  - Prevenção de auto-zoom indesejado no iOS Safari via padronização de campos de formulário com tamanho base `16px` (`text-base sm:text-sm`).
  - Adaptação do container do Manifesto com Dynamic Viewport Height (`100dvh`) e escala proporcional de texto para evitar quebras visuais ao abrir/fechar barras de navegação do browser móvel.
  - Alternador dedicado de catálogo `[ ITENS | SERVIÇOS ]` para dispositivos móveis (`tab-btn-items-mobile` e `tab-btn-services-mobile`).
  - Tabela comparativa com contêiner deslizante `.mobile-table-scroll` e aviso visual de swipe horizontal.
  - Touch targets padronizados com dimensão mínima recomendada de `44x44px` a `48x48px`.
  - Calibração de performance no Lenis (`touchMultiplier: 1.2`) e no WebGL Shader (clamp de DPR em `1.25` no mobile para preservação de bateria e GPU).

---

## 📊 Tabela Comparativa: Início vs. Atual

| Aspecto | Versão Inicial (Fase 1) | Versão Atual Consolidada |
| :--- | :--- | :--- |
| **Nome da Marca** | Escamb.io (em disputa com Escambo / Skamboo) | **Escamb.io** (Definido e Consolidado) |
| **Modelo Econômico** | Moeda virtual fictícia ("Cambi" ◈) | **100% Desmonetizado / Troca Direta (0 R$)** |
| **Gama de Ofertas** | Apenas itens escolares físicos | **Módulos Duplos: Itens Físicos & Serviços/Habilidades** |
| **Tema & Paleta** | Tema claro (Esmeralda `#10B981` / Âmbar `#F59E0B`) | **Void Obsidian (Preto Puro `#000000` + Azul Cobalto `#3B82F6` + Cyan `#22D3EE`)** |
| **Tipografia & Fallback** | Fontes convencionais com fallback serifado | **Gt Alpina + Geist + 100% Sans-Serif System Fallback Stack** |
| **Responsividade & Mobile** | Layout desktop padrão | **Mobile-First Total (Safe Areas, 100dvh, Touch 48px, iOS Zoom-Fix, Shader DPR Clamped)** |
| **Fundo Visual** | Fundo plano estático | **WebGL Shader Background Dinâmico com Ondas & Luz** |
| **Busca de Itens** | Filtro simples em tabela | **Busca Instantânea com Autocomplete, Kbd (`/`, `Ctrl+K`) e Dot-Matrix** |
| **Engajamento** | Texto comum estático | **Manifesto Interativo Scroll-Driven (`TextReveal` com 100dvh)** |
| **Arquitetura de Código** | Protótipo básico em HTML monolítico | **Landing Page Completa + Biblioteca de 13 Componentes React / TS** |
| **Design Tokens** | Variáveis dispersas | **Sistema Unificado em `lib/tokens.ts`** |
| **Acessibilidade** | Padrão básico | **WCAG AA/AAA, Navegação por Teclado, Foco Visível & Reduced Motion** |

---

## 🎯 Status Atual dos Arquivos da Pasta

- `index.html`: Landing page oficial cinematográfica, 100% responsiva para mobile/tablets/desktops, tipografia sans-serif robusta, shader WebGL otimizado e Lenis Scroll.
- `PRODUCT.md`: Documento mestre de especificação de produto, stack e princípios.
- `Defesa_Identidade_Visual.md`: Defesa técnica e conceitual da marca, paleta e UI/UX com detalhamento do sistema sans-serif.
- `Roteiro.txt`: Roteiro de fala atualizado para a apresentação final do projeto.
- `HISTORICO_E_EVOLUCAO.md`: Este documento com o registro cronológico completo de todas as alterações.
- `logo.svg` & `logomarca.jpg`: Identidade gráfica e monograma 4-Diamond Cluster.
- `paleta_cores.svg` & `paleta_cores.jpg`: Especificação vetorial da paleta de cores.
- `lib/tokens.ts` & `lib/utils.ts`: Tokens de design e utilitários com stack sans-serif pura.
- `components/ui/`: Biblioteca completa de componentes React.
