/* ============================================================
   G-UPROOTED — SHARED TAILWIND (CDN) CONFIG
   Load AFTER the Tailwind CDN script on every page:
     <script src="https://cdn.tailwindcss.com"></script>
     <script src="/assets/brand-config.js"></script>

   Green-semantic palette derived from logo.png (LOCKED).
   Green  #245F09  primary action: CTAs, icons, links, eyebrows, accents
   Deep   #1A380C  all dark surfaces (replaces template navy)
   Red    #BD1A27  RESERVED — emergency/urgency only
   ============================================================ */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Brand palette — derived from logo.png (locked)
        green:  { DEFAULT: '#245F09', 400: '#2E7A0C', 300: '#6FB23E', 200: '#CFE8BD', 100: '#EEF6E8' },
        ink:    { DEFAULT: '#1A380C', 800: '#1A380C', 700: '#234A12', 600: '#2C5A16' },
        steel:  { DEFAULT: '#234A12', 700: '#2C5A16', 600: '#356619' },
        emergency: { DEFAULT: '#BD1A27', 700: '#A01620' },
        slate:  { light: '#4A5247', muted: '#7C857A' },
      },
      fontFamily: {
        display: ['Barlow', 'sans-serif'],
        body:    ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        'card':    '0 2px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-lg': '0 8px 32px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.05)',
        'glow':    '0 0 28px rgba(26,56,12,0.16)',
        'cta':     '0 4px 20px rgba(36,95,9,0.30)',
      },
      letterSpacing: { tight: '-0.03em' },
      lineHeight:    { body: '1.7' },
    },
  },
};
