import { productos } from './productos';

function App() {
  return (
    <>
      <header className="encabezado">
        <div className="contenedor">
          <div className="marca">
            <span className="marca-icono">🔨</span>
            El Yunque
          </div>
          <nav>
            <a href="#catalogo">Catálogo</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="contenedor">
          <h1>Herramientas y materiales para tu obra</h1>
          <p>
            Catálogo de referencia de Ferretería El Yunque — página estática
            de demostración, sin conexión a base de datos.
          </p>
          <a className="boton" href="#catalogo">Ver catálogo</a>
        </div>
      </section>

      <section className="seccion" id="catalogo">
        <div className="contenedor">
          <h2>Catálogo</h2>
          <div className="rejilla">
            {productos.map((p) => (
              <article className="tarjeta" key={p.id}>
                <div className="tarjeta-icono">{p.icono}</div>
                <p className="categoria">{p.categoria}</p>
                <h3>{p.nombre}</h3>
                <p className="precio">S/ {p.precio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="pie" id="contacto">
        <div className="contenedor">
          Ferretería El Yunque · +51 (01) 470-2210 · Lima, Perú
        </div>
      </footer>
    </>
  );
}

export default App;
