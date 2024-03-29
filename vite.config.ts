import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '',
  build: {
    outDir: './docs'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/base/_reset.scss";
        @import "@/assets/scss/base/_typography.scss";
        @import "@/assets/scss/base/_base.scss";
        @import "@/assets/scss/abstracts/_variables.scss";
        @import "@/assets/scss/abstracts/_mixins.scss";
        `
      }
    }
  },
  server: {
    port: 3000
  }
})
