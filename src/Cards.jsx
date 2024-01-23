

export const Cards = ()=>{


  return(
    <>
      <div className="md:grid md:grid-cols-3 gap-3">
        <div className="text-center text-white flex flex-col items-center gap-6 p-5 lg:p-2">
          <img className="" src="/movie.png" alt="" />
          <h4 className="font-semibold text-2xl lg:text-3xl">Entretenimiento sin límites</h4>
          <p className="text-white/60 text-xl">Explora miles de horas de series, películas y originales.</p>
        </div>
        <div className="text-center text-white flex flex-col items-center gap-6 p-5 lg:p-2">
          <img className="" src="/devices.png" alt="" />
          <h4 className="font-semibold text-2xl lg:text-3xl">Disponible en tus dispositivos favoritos</h4>
          <p className="text-white/60 text-xl">Disfruta hasta en cuatro pantallas a la vez en dispositivos compatibles.</p>
        </div>
        <div className="text-center text-white flex flex-col items-center gap-6 p-5 lg:p-2">
          <img className="" src="/movie.png" alt="" />
          <h4 className="font-semibold text-2xl lg:text-3xl">Controlles parentales fáciles de usar</h4>
          <p className="text-white/60 text-xl">Cuida de tu familia con nuestros intuitivos controles parentales.</p>
        </div>
      </div>
    </>
  )
}