import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        'main-gray': '#38454c', 
      },
    },
  },
  plugins: [react(),tailwindcss()],
  server:{
    host:true
  }
})
