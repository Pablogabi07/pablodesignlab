import proyecto1 from "../assets/glowyamila.png";
import proyecto2 from "../assets/tropichicas2.png";
import proyecto3 from "../assets/almasimparables.png";

export default function Portfolio() {
  const proyectos = [
    {
      titulo: "GlowyAmila",
      descripcion: "E‑commerce de cosmética con carrito y diseño responsive.",
      img: proyecto1,
      link: "https://9xw2xn.csb.app/",
    },
    {
      titulo: "Tropichicas",
      descripcion: "E‑commerce de tragos con carrito y diseño responsive.",
      img: proyecto2,
      link: "https://tropichicas.vercel.app/",
    },
    {
      titulo: "Almas imparables",
      descripcion:
        "E‑commerce de productos congelados y de granja con carrito y diseño responsive.",
      img: proyecto3,
      link: "https://jksdlf.csb.app/",
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2 className="section-title">Portfolio</h2>

      <div className="portfolio-grid">
        {proyectos.map((p, i) => (
          <a key={i} href={p.link} target="_blank" className="portfolio-card">
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
