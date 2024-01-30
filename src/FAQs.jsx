import '../src/styles/Faqs.css'

export const FAQs = () => {
  return (
    <>
      <div className="bg-[#050614] text-white text-center pt-6 flex flex-col gap-8">
        <h1 className="text-2xl font-bold">Preguntas frecuentes</h1>
        <div className="flex flex-col gap-3 px-10">
          <details name="info" className="bg-[#13151D] py-2 text-xs p-5 ">
            <summary className="p-1 text-base sm:text-xl">¿Qué es Disney+?</summary>
            <p className="pl-1 text-base text-start text-white/60">Disney+ es el servicio de streaming donde podrás ver películas, series, documentales y cortos de todas nuestras marcas: Disney, Pixar, Marvel, Star Wars, National Geographic y mucho más.</p>

          </details>

          <details name="info" className="bg-[#13151D] py-2 text-xs p-5">
            <summary className="p-1 text-base sm:text-xl">¿Qué puedo ver en Disney+?</summary>
            <p className="pl-1 text-base text-start text-white/60">
              Cientos de series, películas, documentales, contenido Original... En Disney+ siempre encontrarás algo para ver.Cientos de series, películas, documentales, contenido Original... En Disney+ siempre encontrarás algo para ver.
            </p>
            <ul className="pl-10 text-base list-disc text-start text-white/60">
              <li className='p-3'>Las últimas películas de animación y acción real de Disney como Elemental o La Sirenita.</li>
              <li className='p-3'>Descubre todas las películas y series de Marvel para poder verlas en orden cronológico (o no) ¡lo que tú prefieras! Loki, Invasión secreta o Guardianes de la Galaxia Vol. 3.Descubre todas las películas y series de Marvel para poder verlas en orden cronológico (o no) ¡lo que tú prefieras! Loki, Invasión secreta o Guardianes de la Galaxia Vol. 3.</li>
              <li className='p-3'>Vuelve a vivir la aventura de las películas de Star Wars, la cronología entera está disponible en Disney+, así como la serie que ha dado la vuelta al mundo, The Mandalorian, y el último lanzamiento Ahsoka.</li>
              <li className='p-3'>Descubre la naturaleza y la historia de la mano de los mejores exploradores y expertos en National Geographic.</li>
              <li className='p-3'>Adéntrate en Star, donde podrás encontrar contenido para maratonear como todas las temporadas de Los Simpson o Anatomía de Grey en exclusiva, series aclamadas por la crítica como The Bear o Solo asesinatos en el edificio, además de grandes producciones cinematográficas como Misterio en Venecia, Indiana Jones o Avatar.</li>
            </ul>
          </details>
          <details name="info" className="bg-[#13151D] py-2 text-xs p-5">
            <summary className="p-1 text-base sm:text-xl">¿Cuánto cuesta Disney+?</summary>
            <p className="pl-1 text-base text-start text-white/60">
              Puedes elegir entre tres planes de Disney+:
            </p>
            <ul className='pl-10 text-base list-disc text-start text-white/60'>
              <li className='p-3'>Prémium (11,99 €/mes o 119,90 €/año): vídeo hasta 4K UHD y HDR. 4 reproducciones simultáneas. Descargas en hasta 10 dispositivos. Audio hasta Dolby Atmos. Streaming sin anuncios.</li>
              <li className='p-3'>Estándar (8,99 €/mes u 89,90 €/año): vídeo hasta Full HD 1080p. 2 reproducciones simultáneas. Descargas en hasta 10 dispositivos. Audio hasta 5.1. Streaming sin anuncios.</li>
              <li className='p-3'>Estándar con anuncios (5,99 €/mes): vídeo hasta Full HD 1080p. 2 reproducciones simultáneas. Audio hasta 5.1. Con anuncios.</li>
            </ul>
          </details>
          <details name="info" className="bg-[#13151D] py-2 text-xs p-5">
            <summary className="p-1 text-base sm:text-xl">¿Qué dispositivos son compatibles?</summary>
            <p className="pl-1 text-base text-start text-white/60">
              Puedes ver Disney+ en tu smartphone, tablet, web, consola o Smart TV. Haz clic <a href='#' className='underline text-white/80'>aquí</a> para ver una lista de todos los dispositivos compatibles.
            </p>
          </details>
          <details name="info" className="bg-[#13151D] py-2 text-xs p-5">
            <summary className="p-1 text-base sm:text-xl">¿Hay compromiso de permanencia al subscribirse a Disney+?</summary>
            <p className="pl-1 text-base text-start text-white/60">
              No hay compromisos de permanencia y puedes cancelar tu suscripción cuando quieras. La cancelación surtirá efecto cuando termine tu periodo de facturación mensual o anual en curso.
            </p>
            <p className="pl-1 text-base text-start text-white/60">Solo tienes que seguir estos pasos:</p>
            <ol className='pl-10 text-base list-decimal text-start text-white/60 '>
              <li className='p-3'>Inicia sesión en <a href="#">www.disneyplus.com</a> </li>
              <li className='p-3'>Selecciona tu perfil</li>
              <li className='p-3'>Selecciona tu cuenta</li>
              <li className='p-3'>Haz click en Cancelar suscripción</li>
              <li className='p-3'>Haz click en Completar cancelación para confirmar</li>
            </ol>
            <p className='pl-1 text-base text-start text-white/60'>Para más información, haz click <a href="#" className='underline text-white/80'>aquí</a></p>
          </details>
        </div>
      </div>

    </>
  )
}