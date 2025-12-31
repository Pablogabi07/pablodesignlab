import proyecto1 from "../assets/glowyamila.png";
import proyecto2 from "../assets/tropichicas2.png";
import proyecto3 from "../assets/almasimparables.png";

export default function Portfolio() {
  const proyectos = [
    {
      titulo: "GlowyAmila",
      descripcion:
        "E‑commerce de cosmética diseñado para transmitir confianza, destacar productos y facilitar el proceso de compra.",
      img: proyecto1,
      link: "https://9xw2xn.csb.app/",
    },
    {
      titulo: "Tropichicas",
      descripcion:
        "Tienda online de tragos con diseño atractivo y navegación clara, pensada para una experiencia de compra rápida y visual.",
      img: proyecto2,
      link: "https://tropichicas.vercel.app/",
    },
    {
      titulo: "Almas Imparables",
      descripcion:
        "E‑commerce de productos congelados y de granja, enfocado en claridad, orden y facilidad de uso para el cliente.",
      img: proyecto3,
      link: "https://jksdlf.csb.app/",
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2 className="section-title">Portfolio</h2>

      <p className="section-subtitle">
        Algunos proyectos donde combiné diseño, funcionalidad y experiencia de
        usuario.
      </p>

      <div className="portfolio-grid">
        {proyectos.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card"
          >
            <img src={p.img} alt={p.titulo} className="portfolio-img" />
            <div className="portfolio-info">
              <h3>{p.titulo}</h3>
              <p>{p.descripcion}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
