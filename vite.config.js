import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Personal-Portfolio-Website/', // Change this to your GitHub repo name
});
