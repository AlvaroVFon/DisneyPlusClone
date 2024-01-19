
// eslint-disable-next-line react/prop-types
export const Button = ({ label = 'Iniciar Sesión', onClick }) => {

  return (
    <button className=" relative px-2 py-1 md:px-4 md:py-3 font-normal text-lg mr-1 mt-2
     text-white uppercase border border-white rounded-md bg-black/70 
     tracking-wide before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/5
     hover:text-black hover:bg-white z-20" 
     onClick={onClick}>
      {label}
    </button>
  )
}