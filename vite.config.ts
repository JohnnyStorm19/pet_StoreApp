import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://pet-store-app-dun.vercel.app/'
})

  // base: 'https://johnnystorm19.github.io/pet_StoreApp/'
