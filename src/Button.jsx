
export const Button = ({ label = 'Iniciar Sesión', onClick }) => {

  return (
    <button className="p-3 text-white uppercase border border-white rounded-md bg-black/70" onClick={onClick}>{label}</button>
  )
}