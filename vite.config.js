import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Si los archivos están en la raíz (sin carpeta src/)
  root: '.',
})
