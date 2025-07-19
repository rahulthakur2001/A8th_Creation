import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Put all node_modules into a vendor chunk
            return 'vendor';
          }
          // You can add more conditions for other manual chunks if needed
        },
      },
    },
    chunkSizeWarningLimit: 1500, // optional: increase limit if you want to suppress warnings below this size
  },
})
