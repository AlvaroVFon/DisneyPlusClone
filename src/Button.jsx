
// eslint-disable-next-line react/prop-types
export const Button = ({ label = 'Iniciar Sesión', onClick }) => {

  return (
    <button className=" relative p-3 font-normal text-xl
     text-white uppercase border border-white rounded-md bg-black/70 
     tracking-wide before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/5
     hover:text-black hover:bg-white" 
     onClick={onClick}>
      {label}
    </button>
  )
}