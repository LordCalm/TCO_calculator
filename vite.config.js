import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: [
        "src/Images/TCO-GartnerGroup.png",
        "src/Images/TCO-Microsoft.png",
      ],
      
    },
  },
  base: process.env.NODE_ENV === 'production'
    ? '/TCO_calculator/' // Replace <REPO> with your repository name
    : '/',
})
