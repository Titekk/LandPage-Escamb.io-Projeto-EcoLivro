/**
 * Escamb.io Design Tokens
 * Marca: Geist (Geist Sans) + Stack Sans-Serif Moderna
 * Header & Navegação Monumental: Geist Mono + Monospace
 * Títulos, Subtítulos, Explicações & Manifesto: "Gt Alpina Condensed", 'GT Alpina Condensed', 'Franklin Gothic Medium', 'Arial Narrow', 'Trebuchet MS', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
 * Metadados, Tabelas & Elementos Técnicos: "Season Sans", 'SeasonSans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
 */

export const SANS_FALLBACK_STACK = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

export const GeistBrand = {
  variable: '--font-geist-brand',
  className: 'font-brand',
  style: { fontFamily: `'Geist Sans', 'Geist', ${SANS_FALLBACK_STACK}` },
};

export const GeistHeaderMono = {
  variable: '--font-geist-header',
  className: 'font-header',
  style: { fontFamily: "'Geist Mono', 'JetBrains Mono', monospace" },
};

export const GtAlpinaCondensedFont = {
  variable: '--font-gt-alpina-condensed',
  className: 'font-alpina font-editorial',
  style: { fontFamily: `"Gt Alpina Condensed", 'Franklin Gothic Medium', 'Arial Narrow', 'Trebuchet MS', ${SANS_FALLBACK_STACK}` },
};

export const SeasonSansFont = {
  variable: '--font-season-sans',
  className: 'font-sans font-season',
  style: { fontFamily: `"Season Sans", ${SANS_FALLBACK_STACK}` },
};

export const tokens = {
  colors: {
    void: {
      pureBlack: '#000000',
      deep: '#010204',
      surface: '#040508',
      card: '#06070B',
      cardHover: '#0A0C12',
      border: 'rgba(255, 255, 255, 0.07)',
      borderHover: 'rgba(34, 211, 238, 0.40)',
    },
    accent: {
      cyan: '#22D3EE',
      cyanAccent: '#00F2FE',
      cyanGlow: 'rgba(34, 211, 238, 0.20)',
      blue: '#3B82F6',
      cobalt: '#2563EB',
      azure: '#38BDF8',
      indigo: '#6366F1',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#94A3B8',
      muted: '#64748B',
      highlight: '#22D3EE',
    },
  },
  typography: {
    fonts: {
      brand: `'Geist Sans', 'Geist', ${SANS_FALLBACK_STACK}`,
      header: "'Geist Mono', 'JetBrains Mono', monospace",
      editorialDisplay: `"Gt Alpina Condensed", "Times New Roman", ${SANS_FALLBACK_STACK}`,
      titles: `"Gt Alpina Condensed", "Times New Roman", ${SANS_FALLBACK_STACK}`,
      subtitles: `"Gt Alpina Condensed", "Times New Roman", ${SANS_FALLBACK_STACK}`,
      explanations: `"Gt Alpina Condensed", "Times New Roman", ${SANS_FALLBACK_STACK}`,
      manifesto: `"Gt Alpina Condensed", "Times New Roman", ${SANS_FALLBACK_STACK}`,
      body: `"Season Sans", Arial, ${SANS_FALLBACK_STACK}`,
      heading: `"Season Sans", Arial, ${SANS_FALLBACK_STACK}`,
      table: `"Season Sans", Arial, ${SANS_FALLBACK_STACK}`,
      smallText: `"Season Sans", Arial, ${SANS_FALLBACK_STACK}`,
    },
    tracking: {
      tighter: '-0.05em',
      tight: '-0.03em',
      normal: '0em',
      wide: '0.05em',
      wider: '0.12em',
    },
  },
  shadows: {
    card: '0 10px 30px -10px rgba(0, 0, 0, 0.9)',
    cyanGlow: '0 0 24px rgba(34, 211, 238, 0.22)',
    azureGlow: '0 0 24px rgba(56, 189, 248, 0.18)',
  },
  radii: {
    pill: '9999px',
    card: '1.5rem',
    cardLg: '2rem',
    squircle: '0.875rem',
  },
} as const;

export type DesignTokens = typeof tokens;
