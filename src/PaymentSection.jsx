

export const PaymentSection = () => {

  return (
    <>
      <div className="bg-[#040714] min-h-[3000px]">
        <h2 className="text-white text-center text-2xl p-3">Elige tu plan</h2>
        <div className="text-white grid grid-cols-3 md:grid-cols-5 gap-5 p-3 sticky top-0">
          {/* ROW 1 */}
          
          <div className="space-y-4 md:col-start-3">
            <button className=" flex items-center font-thin p-3 h-[50px] w-full bg-[#000F66] rounded-md leading-3 sm:leading-none">ESTÁNDAR CON ANUNCIOS</button>
            <p className="text-center text-sm font-light text-[#CCCCCC]">5,99 € / mes</p>
          </div>
          <div className="space-y-4">
            <button className="font-light p-3 h-[50px] w-full bg-[#000F66] rounded-md">ESTÁNDAR</button>
            <p className="text-center text-sm font-light text-[#CCCCCC]">8,99 € / mes</p>
          </div>
          <div className="space-y-4 bg-[#1D1F2B]">
            <button className="font-light p-3 h-[50px] w-full bg-[#016cf9] rounded-md">PRÉMIUM</button>
            <p className="text-center text-sm font-light text-white">11,99 € / mes</p>
          </div>
          {/* ROW 2 */}
          <div className="hidden md:flex col-span-2 w-full items-end">
            <p className="">Calidad máxima del vídeo</p>      
          </div>
          <div className="col-span-full w-full text-center text-sm tracking-wide p-2 border-t-2 text-[#CCCCCC] md:hidden">
            <h6>Consigue 12 meses por el precio de 10*</h6>
          </div>
          {/* ROW 3 */}
          <div className="text-center text-xl md:col-start-3">-</div>
          <div className="text-center">
            <a href="#ToDo">90,90 € / año</a>
          </div>
          <div className="text-center">
            <a href="#ToDo">190,90 € / año</a>
          </div>
          <div className="col-span-full w-full text-center text-sm tracking-wide p-2 border-t-[1px] text-[#CCCCCC] md:hidden">
            <h6>Calidad máxima del vídeo</h6>
          </div>
          <div className="text-center text-[#CCCCCC] md:col-start-3">
            <p>1080p Full HD</p>
          </div>
          <div className="text-center text-[#CCCCCC]">
            <p>1080p Full HD</p>
          </div>
          <div className="text-center">
            <p>4K UHD y HDR</p>
          </div>
        </div>
      </div>
    </>
  )
}