import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- 1. IMPORT THE PLUGIN

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- 2. ADD THE PLUGIN HERE
  ],
})