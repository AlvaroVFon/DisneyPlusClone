

export const PrimeSection = ()=>{


  return(
    <>
      <div className=" flex flex-col-reverse bg-black text-white">
      <picture>
          <source media="(min-width: 600px )" srcSet="/original_md.webp" />
          <img src="/original_sm.webp" alt="" />
        </picture>
        <div className="">
          <h1>Solo en Disney+</h1>
          <p>Películas, series y contenidos Originales exclusivos que no encontrarás en ningún otro servicio de streaming.</p>
        </div>

      </div>
    </>
  )
}