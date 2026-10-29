import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// El sitio se publica en la raíz de danielcortes2.github.io, por eso base es '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
