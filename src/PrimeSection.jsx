

export const PrimeSection = ()=>{


  return(
    <>
      <div className=" flex flex-col-reverse bg-[#040714] text-white md:relative">
        <picture>
          <source media="(min-width: 600px )" srcSet="/original_md.webp" />
          <img src="/original_sm.webp" className="2xl:w-full" alt="Loki Img" />
        </picture>
        <div className="flex flex-col justify-center items-center gap-4 md:absolute md:top-0 xl:top-60 md:left-0 2xl:bottom-64 2xl:left-20 md:items-start md:p-12 lg:p-20 md:gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl md:font-semibold tracking-wide">Solo en Disney+</h1>
          <p className="font-light text-center md:text-left lg:text-lg md:p-0 md:w-72 lg:w-[400px] xl:w-[600px] px-10 tracking-wide mb-16 leading-6">Películas, series y contenidos Originales exclusivos que no encontrarás en ningún otro servicio de streaming.</p>
        </div>
      </div>
    </>
  )
}