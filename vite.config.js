import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // IMPORTANT: set this to the repo name path for GitHub Pages
  // For your repo https://github.com/Itachi3355/MURALISAISRINIVAS
  // the correct base is '/MURALISAISRINIVAS/'
  base: '/MURALISAISRINIVAS/',
  plugins: [
    react({
      // Add this for development
      jsxRuntime: 'automatic',
      jsxImportSource: 'react',
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx']
        ]
      }
    })
  ],
  server: {
    port: 3000,
    open: true,
    // Add for debugging
    hmr: { overlay: true },
  },
  build: {
    outDir: 'dist',
  },
  css: {
    postcss: './postcss.config.cjs',
  },
  // Add for better error reporting
  esbuild: {
    logLevel: 'info',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  }
});