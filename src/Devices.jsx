export const Devices = () => {

  return (
    <div className="bg-[#050614] flex flex-col items-center text-center text-white pt-10">
      <h1 className="p-10 text-3xl font-semibold text-center lg:text-4xl">Disponible en tus dispositivos favoritos</h1>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col items-center justify-start">
          <img src="/TV.png" alt="" />
          <h6 className="text-xl font-bold md:text-2xl">TV</h6>
          <ul className="pt-5">
            <li>Amazon Fire TV</li>
            <li>Dispositivos Android</li>
            <li>TV</li>
            <li>Apple TV</li>
            <li>Chromecast</li>
            <li>Televisores LG</li>
            <li>Samsung</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-start">
          <img src="/laptop.png" alt="" />
          <h6 className="text-xl font-bold md:text-2xl">Ordenadores</h6>
          <ul className="pt-5">
            <li>Chrome OS</li>
            <li>Mac OS</li>
            <li>Windows PC</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-start">
          <img src="/mobile.png" alt="" />
          <h6 className="text-xl font-bold md:text-2xl">Móvil y Tablet</h6>
          <ul className="pt-5">
            <li>Tablets Amazon Fire</li>
            <li>Móviles y Tablets</li>
            <li>Android</li>
            <li>iPhone & iPad</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-start">
          <img src="/console.png" alt="" />
          <h6 className="text-xl font-bold md:text-2xl">Videoconsolas</h6>
          <ul className="pt-5">
            <li>PS4</li>
            <li>PS5</li>
            <li>Xbox One</li>
            <li>Xbox Series X</li>
            <li>Xbox Series S</li>
          </ul>
        </div>
      </div>
    </div>
  )
}