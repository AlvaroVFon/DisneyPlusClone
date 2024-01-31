import Logo from '/logo.svg'
export const Popup = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-t from-[#0E1847] to-[#090C32] flex flex-col gap-4 items-center justify-center">
      <img src={Logo} alt="" className='w-32' />
      <div className="bg-transparent sm:bg-white popup h-96 w-[550px] rounded-xl p-10 flex flex-col gap-5">

        <h1 className="text-xl font-light text-white sm:text-[#252526]">PASO 1</h1>
        <p className="text-2xl text-white sm:text-[#252526]" >Escribe tu dirrección de correo electrónico para continuar</p>
        <p className="text-white/70 sm:text-[#252526]/70">Inicia sesión en tu cuenta. Si no tienes una, tendrás que crearla.</p>
        <form action="" className="flex flex-col gap-5">
          <input type="text" placeholder="Dirección de correo" className="pl-3 rounded-sm h-14 placeholder:text-left bg-[#E9EBF0] focus:border-white" />
          <input type="submit" value="Continuar" className="rounded-full bg-[#0058E1] text-white h-14 cursor-pointer" />
        </form>
      </div>
    </div>
  )
};