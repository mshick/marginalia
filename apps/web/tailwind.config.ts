import { plugin, prose } from '@marginalia/tailwindcss';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (utils) => {
        return prose(utils, { themeName: 'stone' });
      }
    }
  },
  plugins: [typography, plugin]
} satisfies Config;
