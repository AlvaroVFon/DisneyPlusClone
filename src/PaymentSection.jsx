import { FaCheck } from "react-icons/fa6"
import { GoDash } from "react-icons/go"

export const PaymentSection = () => {

  return (
    <>
      <div className="bg-[#040714] lg:px-40">
        <h2 className="text-white w-full border-b-2 border-[#B3B4B5]/20 text-center text-2xl p-8">Elige tu plan</h2>
        <div className="text-white grid grid-rows-7 p-3 md:text-lg lg:text-xl">
          {/* ROW 1 */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-x-2 border-b-[1px] border-[#B3B4B5] py-2 sticky top-0 bg-[#050614]">
            <div className="md:col-start-3">
              <button className="flex items-center justify-center font-thin p-3 h-[50px] w-full bg-[#000F66] rounded-md leading-4 sm:leading-none">ESTÁNDAR CON ANUNCIOS</button>
              <p className="text-center text-sm font-light text-[#CCCCCC] mt-5 lg:p-8 lg:text-lg">5.99 € / mes</p>
            </div>
            <div className="">
              <button className="font-light p-3 h-[50px] w-full bg-[#000F66] rounded-md">ESTÁNDAR</button>
              <p className="text-center text-sm font-light text-[#CCCCCC] mt-5 lg:p-8 lg:text-lg">8.99 € / mes</p>
            </div>
            <div className="">
              <button className="font-light p-3 h-[50px] w-full bg-[#0063E5] rounded-md">PRÉMIUM</button>
              <p className="text-center text-sm font-light text-[#CCCCCC] mt-5 lg:p-8 lg:text-lg">11.99 € / mes</p>
            </div>
          </div>
          {/* ROW 2 */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-x-8 border-b-[1px] border-[#FFFFFF]/30 pb-2 place-items-center">
            <h6 className="col-span-full md:col-span-2 text-center p-3 text-[#B3B4B5]"> Consigue 12 meses por el precio de 10*</h6>
            <div className="md:col-start-3">
              <p className="">-</p>
            </div>
            <div className="">
              <a href="#ToDo" className="underline">89.90 € / año</a>
            </div>
            <div className="">
              <a href="#ToDo" className="underline">119.90 € / año</a>
            </div>
          </div>
          {/* ROW 3 */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-x-8 border-b-[1px] border-[#FFFFFF]/30 pb-2 place-items-center">
            <h6 className="col-span-full md:col-span-2 text-center p-3 text-[#B3B4B5]"> Calidad máxima del vídeo</h6>
            <div className="md:col-start-3">
              <p className="text-[#B3B4B5]">1080p Full HD</p>
            </div>
            <div className="">
              <p className="text-[#B3B4B5]">1080p Full HD</p>
            </div>
            <div className="">
              <p>4K UHD y HDR</p>
            </div>
          </div>
          {/* ROW 4 */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-x-8 border-b-[1px] border-[#FFFFFF]/30 pb-2 place-items-center">
            <h6 className="col-span-full md:col-span-2 text-center p-3 text-[#B3B4B5]"> Reproduciones simultáneas</h6>
            <div className="md:col-start-3">
              <p className="text-[#B3B4B5]">2</p>
            </div>
            <div className="">
              <p className="text-[#B3B4B5]">2</p>
            </div>
            <div className="">
              <p>4</p>
            </div>
          </div>
          {/* ROW 5 */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-x-8 border-b-[1px] border-[#FFFFFF]/30 pb-2 place-items-center">
            <h6 className="col-span-full md:col-span-2 text-center p-3 text-[#B3B4B5]"> Descargas</h6>
            <div className="md:col-start-3">
              <p className="text-[#B3B4B5]">-</p>
            </div>
            <div className="">
              <p className="text-2xl"><FaCheck/></p>
            </div>
            <div className="">
              <p className="text-2xl"><FaCheck/></p>
            </div>
          </div>
          {/* ROW 6 */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-x-8 border-b-[1px] border-[#FFFFFF]/30 pb-2 place-items-center">
            <h6 className="col-span-full md:col-span-2 text-center p-3 text-[#B3B4B5]"> Compativilidad con Dolby Atmos</h6>
            <div className="md:col-start-3">
              <p className="text-[#B3B4B5]">-</p>
            </div>
            <div className="">
              <p className="text-[#B3B4B5]">-</p>
            </div>
            <div className="text-xl">
              <p className="text-2xl"><FaCheck/></p>
            </div>
          </div>
          {/* ROW 7 */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-x-8 border-b-[1px] border-[#FFFFFF]/30 pb-2 place-items-center">
            <h6 className="col-span-full md:col-span-2 text-center p-3 text-[#B3B4B5]"> Straming sin anuncios**</h6>
            <div className="md:col-start-3">
              <p className="text-[#B3B4B5]">-</p>
            </div>
            <div className="">
              <p className="text-2xl"><FaCheck/></p>
            </div>
            <div className="">
              <p className="text-2xl"><FaCheck/></p>
            </div>
          </div>
        </div>
        <div className="text-[#B3B4B5] text-xs p- text-center lg:mt-10 lg:text-sm">
          <p>*Al adquirir una suscripción anual en vez de una mensual. </p>
          <p>**Todos los planes pueden incluir tráileres, promociones de productos y servicios de Disney, patrocinios y similares.</p>
          <p>La calidad del vídeo y el audio depende de la conexión a Internet y de las prestaciones del dispositivo.</p>
          <p>Plan Estándar con anuncios: la compatibilidad con dispositivos varía y no se pueden descargar contenidos. <a href="#ToDo" className="underline">Más información.</a></p>
        </div>
      </div>
     
      </>
  )
}