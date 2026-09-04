export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  icono: string;
}

// Datos fijos, sin API ni base de datos — pensado para una página estática
// en GitHub Pages. Edita esta lista directamente para cambiar el catálogo.
export const productos: Producto[] = [
  { id: 1, nombre: 'Martillo de uña 16 oz', categoria: 'Herramientas manuales', precio: 45, icono: '🔨' },
  { id: 2, nombre: 'Taladro percutor 1/2" 750W', categoria: 'Herramientas eléctricas', precio: 289, icono: '🔩' },
  { id: 3, nombre: 'Tornillos para madera 1" (caja x100)', categoria: 'Tornillería', precio: 12, icono: '⚙️' },
  { id: 4, nombre: 'Pintura látex blanco 1 galón', categoria: 'Pintura', precio: 68, icono: '🎨' },
  { id: 5, nombre: 'Cable eléctrico THW 12 AWG', categoria: 'Electricidad', precio: 95, icono: '🔌' },
  { id: 6, nombre: 'Casco de seguridad', categoria: 'Seguridad', precio: 34, icono: '⛑️' },
];
