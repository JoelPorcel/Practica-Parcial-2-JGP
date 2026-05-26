import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api/login': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/api/medicos': {
        target: 'http://localhost:3002',
        changeOrigin: true,
      },
      '/api/citas': {
        target: 'http://localhost:3003',
        changeOrigin: true,
      },
    },
  },
})