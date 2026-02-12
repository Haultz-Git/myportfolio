import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// For GitHub Pages, set base to the repo name
export default defineConfig({
  base: '/myportfolio/',
  plugins: [react()],
})
