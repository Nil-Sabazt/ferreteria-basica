import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ⚠️ PASO OBLIGATORIO ANTES DE DESPLEGAR:
// Cambia 'NOMBRE-DEL-REPO' por el nombre EXACTO de tu repositorio en GitHub
// (el que aparece en la URL: github.com/tu-usuario/NOMBRE-DEL-REPO).
// GitHub Pages sirve un "project site" desde esa subcarpeta
// (tu-usuario.github.io/NOMBRE-DEL-REPO/), así que Vite necesita saberlo
// para que las rutas de CSS/JS no salgan rotas (la causa #1 de la típica
// "pantalla en blanco" al desplegar Vite en GitHub Pages).
// En desarrollo local (npm run dev) esto no afecta nada.
const NOMBRE_DEL_REPO = 'ferreteria-basica';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? `/${NOMBRE_DEL_REPO}/` : '/',
}));
