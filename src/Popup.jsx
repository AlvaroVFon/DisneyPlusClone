import { Button } from './Button.jsx'
import { useState } from 'react'
import Logo from '/logo.svg'
export const Popup = () => {

  const [showPopup, setShowPopup] = useState(false)
  const handleClick = () => {
    setShowPopup(!showPopup)
  }
  return (
    <>
      {showPopup && (
        <div className="fixed top-0 right-0 z-30">

          <div className="flex flex-col items-center justify-center w-screen h-screen gap-4 bg-black/90">
            <img src={Logo} alt="" className='w-32' />
            <div className="bg-transparent sm:bg-white popup sm:h-96 sm:w-[550px] rounded-xl p-10 flex flex-col gap-5">

              <h1 className="text-xl font-light text-white sm:text-[#252526]">PASO 1</h1>
              <p className="text-2xl text-white sm:text-[#252526]" >Escribe tu dirrección de correo electrónico para continuar</p>
              <p className="text-white/70 sm:text-[#252526]/70">Inicia sesión en tu cuenta. Si no tienes una, tendrás que crearla.</p>
              <form action="" className="flex flex-col gap-5 sm:grid sm:grid-cols-2">
                <input type="text" placeholder="Dirección de correo" className="pl-3 col-span-2 rounded-sm h-14 placeholder:text-left bg-[#E9EBF0] focus:border-white" />
                <input type="submit" value="Continuar" className="rounded-full bg-[#0058E1] hover:bg-[#0058E1]/80 text-white h-14 cursor-pointer" />
                <button className='text-white border-2 border-white rounded-full sm:border-black sm:text-black h-14' onClick={handleClick}>Cerrar</button>
              </form>
            </div>
          </div>
        </div>)}
      {!showPopup && <Button onClick={handleClick} />}
    </>
  )
};