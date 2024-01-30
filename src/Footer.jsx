import Logo from '/logo.svg'
import { TfiWorld } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";



export const Footer = () => {

  return (
    <footer className='flex flex-col bg-[#040714] items-center px-8 md:px-50 lg:px-80 gap-12 pt-36'>
      <img src={Logo} alt="logo" className='w-[100px]' />
      <ul className='flex flex-wrap items-center justify-center gap-6 text-xs text-white/60'>
        <li className='flex items-center'> <TfiWorld className='mr-2' /> Español <IoIosArrowDown className='ml-2' /> </li>
        <li className=''>Acuerdo de suscripción</li>
        <li className=''>Política de privacidad</li>
        <li className=''>Derechos de privacidad de la UE y Reino Unido</li>
        <li className=''>Política de cookies</li>
        <li className=''>Anuncios basados en tus intereses</li>
        <li className=''>Dispositivos compatibles </li>
        <li className=''>Ayuda</li>
        <li className=''>¿Quiénes somos?</li>
        <li className=''>Gestionar preferencias de privacidad</li>
      </ul>
      <p className='text-white/70'>&#169; 2024 Disney y entidades relacionadas. Reservados todos los derechos.</p>
    </footer>
  )
}