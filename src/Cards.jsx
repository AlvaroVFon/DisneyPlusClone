

export const Cards = ()=>{


  return(
    <>
    <div className="md:grid md:grid-cols-3">
      <div className="text-center text-white flex flex-col items-center justify-center">
        <img className="p-5" src="/movie.png" alt="" />
        <h4 className="font-semibold text-2xl px-2">Entretenimiento sin límite</h4>
        <p className="p-5 text-white/60">Explora miles de horas de series, películas y originales</p>
      </div>
      <div className="text-center text-white flex flex-col items-center justify-center">
        <img className="p-5" src="/devices.png" alt="" />
        <h4 className="font-semibold text-2xl px-2">Disponible en tus dispositivos favoritos</h4>
        <p className="p-5 text-white/60">Disfruta hasta en cuatro pantallas a la vez en dispositivos compatibles.</p>
      </div>
      <div className="text-center text-white flex flex-col items-center justify-center">
        <img className="p-5" src="/movie.png" alt="" />
        <h4 className="font-semibold text-2xl px-2">Controlles parentales fáciles de usar</h4>
        <p className="p-5 text-white/60">Cuida de tu familia con nuestros intuitivos controles parentales.</p>
      </div>
    </div>
    </>
  )
}