

export const LandingForm = ()=>{


  return(
    <>
      <form className=" flex flex-col md:flex-row gap-5 md:gap-0 min-w-[300px] md:min-w-[700px] md:rounded-md md:overflow-hidden z-20 ">
        <input className="p-3 rounded-sm md:rounded-none md:w-8/12 md:h-[55px] bg-[#31343E] placeholder:text-[#757575] " type="email" name="mail" placeholder="Dirección de correo electrónico"/>
        <input className="p-3 rounded-sm md:rounded-none md:w-4/12 md:h-[55px] bg-[#016CF9] font-md cursor-pointer" type="button" value="SUBSCRÍBETE YA" />
      </form> 
    </>
  )
}
