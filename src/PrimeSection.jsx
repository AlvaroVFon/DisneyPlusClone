

export const PrimeSection = ()=>{


  return(
    <>
      <div className=" flex flex-col-reverse bg-[#040714] text-white">
      <picture>
          <source media="(min-width: 600px )" srcSet="/original_md.webp" />
          <img src="/original_sm.webp" alt="" />
        </picture>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl tracking-wide">Solo en Disney+</h1>
          <p>Películas, series y contenidos Originales exclusivos que no encontrarás en ningún otro servicio de streaming.</p>
        </div>

      </div>
    </>
  )
}