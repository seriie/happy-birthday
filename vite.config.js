import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // allowing ngrok to access the app
    allowedHosts: [
      'b024-103-121-182-239.ngrok-free.app'
    ]
  }
})
