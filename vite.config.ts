import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
// const __dirname = 'src';
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  server: {
    host: 'localhost',
    port: 3000,
  },
  css: {
    devSourcemap: true,
  },
});
