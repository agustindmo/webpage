import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Tailwind plugin re-added

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-react-compiler' // <-- React Compiler plugin
        ],
      },
    }),
    tailwindcss(), // <-- Tailwind plugin re-added
  ],
})