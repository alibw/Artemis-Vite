import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '^/categories': {
        target: 'http://localhost:5000', // Target server
        changeOrigin: true
      },
    },
  },
});
