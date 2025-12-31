import useFadeIn from "../hooks/useFadeIn";

export default function Servicios() {
  const [ref, visible] = useFadeIn();

  return (
    <section
      id="servicios"
      ref={ref}
      className={`servicios fade-in ${visible ? "visible" : ""}`}
    >
      <h2 className="section-title">Servicios</h2>

      <p className="section-subtitle">
        Soluciones digitales pensadas para comunicar mejor tu marca y generar
        resultados reales.
      </p>

      <div className="servicios-grid">
        <div className={`servicio-card fade-card ${visible ? "visible" : ""}`}>
          <h3>Diseño Web</h3>
          <p>
            Landing pages y sitios web profesionales enfocados en mostrar tu
            propuesta de valor y convertir visitas en contactos.
          </p>
        </div>

        <div className={`servicio-card fade-card ${visible ? "visible" : ""}`}>
          <h3>Responsive Design</h3>
          <p>
            Tu sitio se adapta perfectamente a celulares, tablets y computadoras
            para una experiencia fluida en cualquier dispositivo.
          </p>
        </div>

        <div className={`servicio-card fade-card ${visible ? "visible" : ""}`}>
          <h3>Branding</h3>
          <p>
            Identidad visual coherente y profesional: colores, tipografías y
            estilo alineados a la personalidad de tu marca.
          </p>
        </div>

        <div className={`servicio-card fade-card ${visible ? "visible" : ""}`}>
          <h3>Optimización UX</h3>
          <p>
            Diseño centrado en el usuario para que navegar tu sitio sea simple,
            intuitivo y agradable.
          </p>
        </div>
      </div>
    </section>
  );
}


