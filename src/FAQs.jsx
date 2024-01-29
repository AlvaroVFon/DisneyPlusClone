import './styles/FAQS.css'

export const FAQs = () => {
  return (
    <>
      <div className="bg-[#050614] text-white text-center pt-6 flex flex-col gap-8">
        <h1 className="text-2xl font-bold">Preguntas frecuentes</h1>
        <div className="flex flex-col gap-3 px-10">
          <details name="info" className="bg-[#13151D] py-2 text-xs p-5 ">
            <summary className="p-1 text-base sm:text-xl">¿Qué es Disney+?</summary>
            <p className="pl-1 text-base text-start">Disney+ es el servicio de streaming donde podrás ver películas, series, documentales y cortos de todas nuestras marcas: Disney, Pixar, Marvel, Star Wars, National Geographic y mucho más.</p>

          </details>
          <details name="info" className="bg-[#13151D] py-2 text-xs p-5">
            <summary className="p-1 text-base sm:text-xl">¿Qué puedo ver en Disney+?</summary>
            <p className="pl-1 text-base text-start">
              Cientos de series, películas, documentales, contenido Original... En Disney+ siempre encontrarás algo para ver.Cientos de series, películas, documentales, contenido Original... En Disney+ siempre encontrarás algo para ver.
            </p>
          </details>
          <details name="info" className="bg-[#13151D] py-2 text-xs p-5">
            <summary className="p-1 text-base sm:text-xl">¿Qué puedo ver en Disney+?</summary>
            <p className="pl-1 text-base text-start">
              Cientos de series, películas, documentales, contenido Original... En Disney+ siempre encontrarás algo para ver.Cientos de series, películas, documentales, contenido Original... En Disney+ siempre encontrarás algo para ver.
            </p>
          </details>
          <details name="info" className="bg-[#13151D] py-2 text-xs p-5">
            <summary className="p-1 text-base sm:text-xl">¿Qué es Disney+?</summary>
            <p className="pl-1 text-base text-start">Disney+ es el servicio de streaming donde podrás ver películas, series, documentales y cortos de todas nuestras marcas: Disney, Pixar, Marvel, Star Wars, National Geographic y mucho más.</p>

            <ul className="pl-1 text-base text-start">
              <li>Las últimas películas de animación y acción real de Disney como Elemental o La Sirenita.</li>
              <li>Descubre todas las películas y series de Marvel para poder verlas en orden cronológico (o no) ¡lo que tú prefieras! Loki, Invasión secreta o Guardianes de la Galaxia Vol. 3.Descubre todas las películas y series de Marvel para poder verlas en orden cronológico (o no) ¡lo que tú prefieras! Loki, Invasión secreta o Guardianes de la Galaxia Vol. 3.</li>
              <li>Vuelve a vivir la aventura de las películas de Star Wars, la cronología entera está disponible en Disney+, así como la serie que ha dado la vuelta al mundo, The Mandalorian, y el último lanzamiento Ahsoka.</li>
              <li>Descubre la naturaleza y la historia de la mano de los mejores exploradores y expertos en National Geographic.</li>
              <li>Adéntrate en Star, donde podrás encontrar contenido para maratonear como todas las temporadas de Los Simpson o Anatomía de Grey en exclusiva, series aclamadas por la crítica como The Bear o Solo asesinatos en el edificio, además de grandes producciones cinematográficas como Misterio en Venecia, Indiana Jones o Avatar.</li>
            </ul>
          </details>
        </div>
      </div>

    </>
  )
}