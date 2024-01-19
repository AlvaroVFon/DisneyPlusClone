import { LandingForm } from "./LandingForm"
import { IoIosArrowDown } from "react-icons/io";

export const Landing = ()=>{
  return (
    <>
       <section className='w-full flex flex-col gap-4 items-center justify-center min-h-screen px-4 md:px-30 text-white text-center tracking-wide after:content-[""] after:absolute after:top-0 after:bottom-0 after:h-full after:w-full after:bg-gradient-to-t after:from-[#040714] after:via-40% after:via-[#040714]/90 after:to-transparent after:z-10 lg:after:bg-none'>

          <p className='leading-[1.2em] text-[1.65rem]  md:text-[2rem] lg:text-5xl text-center  font-medium z-20 mt-28'>
            Contenidos Originales exclusivos ,<br/> películas de éxito y series para maratonear
          </p>
          <p className='text-lg md:text-xl z-20'>Cancela cuando quieras.*</p>
          <p className='text-[#B3B4B5] text-md md:text-xl z-20' >Escribe tu dirección de correo electrónico para crear o reactivar tu suscripción.</p>
          <LandingForm/>
          <div className="flex flex-col gap-6 md:px-14 items-center z-20">
            <p className="text-[#B3B4B5] z-20">Consigue 12 meses por el precio de 10 en tu plan Prémium o Estándar al adquirir una suscripción anual en vez de una mensual.</p>
            <p className="text-xs text-[#B3B4B5] z-20">*Cancelación con efecto al finalizar el periodo de suscripción mensual o anual en curso. No se realizarán devoluciones o reembolsos parciales. Imprescindible tener una suscripción.
              <br/>Cristóbal Balenciaga estará disponible el 19 de enero</p>
            <a className="text-[#B3B4B5] mt-[50px] text-3xl animate-bounce animate-infinite z-20" href="#PrimeSection"><IoIosArrowDown/></a>
          </div>
        </section>
     </>
  )
}