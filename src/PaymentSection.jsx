

export const PaymentSection = () => {

  return (
    <>
      <div className="bg-[#040714] min-h-[3000px]">
        <h2 className="text-white text-center text-2xl p-3">Elige tu plan</h2>
        <div className="text-white grid grid-cols-3 md:grid-cols-5 gap-5 p-3 sticky top-0">
          <div className="hidden md:block">

          </div>
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

        </div>
      </div>
    </>
  )
}