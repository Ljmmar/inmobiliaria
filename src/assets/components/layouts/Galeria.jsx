import { galeria } from "../config/database"
const Galeria = () => {
  return (
    <section className="galeria">
      {
        galeria.map((img) => (
          <div className="cards">
            <img className="imagenes" src={img.img} alt="" />
            <h1>{img.nombre}</h1>
            <ul>
              <li >{img.d1}</li>
              <li >{img.d2}</li>
              <li >{img.d3}</li>
              <li >{img.d4}</li>
            </ul>
            <a href="">Learn more</a>
          </div>
        ))
      }
    </section>
  )
}
export default Galeria