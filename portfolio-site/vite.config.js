import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/your-repo-name/', // Replace 'your-repo-name' with your actual GitHub repository name
  build: {
    outDir: 'dist',
  },
})
