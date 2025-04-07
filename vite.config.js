import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  server: {
    headers: {
      'Content-Type': 'application/manifest+json'
    }
  },
  plugins: [
    react(),
    VitePWA({
      strategies: 'generateSW', // Add this line
      registerType: 'autoUpdate',
      manifest: {
        name: 'Brainwave',
        short_name: 'Brainwave',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      injectRegister: 'auto' // Add this line
    })
  ]
});