import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

// Resolve current directory for ESM environment
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  // Base path phục vụ triển khai chính thức trên GitHub Pages repo: /portfolio-group/
  base: '/portfolio-group/',

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 2500,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        hieu: resolve(__dirname, 'members/nguyen-xuan-hieu/index.html'),
        thu: resolve(__dirname, 'members/nguyen-anh-thu/index.html'),
        nhu: resolve(__dirname, 'members/nguyen-thi-thao-nhu/index.html'),
        chau: resolve(__dirname, 'members/le-huu-chau/index.html'),
        truong: resolve(__dirname, 'members/le-nguyen-nhat-truong/index.html'),
        huynh: resolve(__dirname, 'members/nguyen-pham-y-huynh/index.html'),
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});
