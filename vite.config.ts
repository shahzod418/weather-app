import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, './src/shared/ui'),
      '@lib': path.resolve(__dirname, './src/shared/lib'),
      '@components': path.resolve(__dirname, './src/components'),
      '@typings': path.resolve(__dirname, './src/shared/typings'),
      '@constants': path.resolve(__dirname, './src/shared/constants'),
    },
  },
})
