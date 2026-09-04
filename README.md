# Ferretería El Yunque — versión básica (React + Vite)

Página estática de demostración, sin backend ni base de datos — pensada
específicamente para desplegarse en **GitHub Pages** sin los problemas
típicos de alojamiento (pantalla en blanco, rutas rotas, base path mal
configurado).

## Correr en tu computadora

```bash
npm install
npm run dev
```

Abre la URL que te muestre la terminal (normalmente `http://localhost:5173`).

## Desplegar en GitHub Pages (automático)

Este proyecto ya trae un flujo de **GitHub Actions**
(`.github/workflows/deploy.yml`) que compila y publica la página
automáticamente cada vez que subes cambios a la rama `main`. Pasos:

1. **Antes de subir nada:** abre `vite.config.ts` y reemplaza
   `NOMBRE_DEL_REPO` por el nombre EXACTO de tu repositorio en GitHub
   (ver el comentario dentro del archivo — este es el paso que más gente
   olvida, y es la causa #1 de la pantalla en blanco al desplegar Vite en
   GitHub Pages).

2. Crea el repositorio en GitHub (puede ser público o privado, GitHub Pages
   funciona con ambos si tienes cuenta Pro, o público si tienes cuenta
   gratuita) y sube el proyecto:
   ```bash
   git init
   git add .
   git commit -m "Version inicial"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/NOMBRE-DEL-REPO.git
   git push -u origin main
   ```

3. En GitHub, ve a tu repositorio → **Settings** → **Pages** (menú
   izquierdo). En "Build and deployment" → "Source", selecciona
   **"GitHub Actions"** (NO "Deploy from a branch" — esa es la opción vieja
   que suele dar más problemas).

4. Ve a la pestaña **"Actions"** de tu repositorio. Debería aparecer un flujo
   corriendo automáticamente ("Desplegar en GitHub Pages"). Espera a que
   termine (1-2 minutos, ícono verde ✓).

5. Vuelve a **Settings → Pages** — arriba te va a mostrar la URL pública,
   algo como:
   ```
   https://tu-usuario.github.io/NOMBRE-DEL-REPO/
   ```

Cada vez que hagas `git push` a `main` después de esto, la página se
actualiza sola — no necesitas repetir estos pasos.

## Errores comunes

- **Pantalla en blanco después de desplegar:** casi siempre es el `base` de
  `vite.config.ts` sin coincidir con el nombre real del repositorio. Revisa
  la consola del navegador (F12 → pestaña Console): si ves errores 404
  pidiendo archivos `.js`/`.css` desde una ruta rara, es justamente esto.
- **El flujo de Actions falla:** entra a la pestaña "Actions", haz clic en el
  flujo que falló, y revisa qué paso específico se rompió — el log suele
  decir exactamente qué pasó.
