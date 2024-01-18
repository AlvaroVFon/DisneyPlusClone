import Header from './Header'
function App() {

  return (
    <>
      <main className='bg-[url("/bgImage.jpg")] h-screen' >
      <Header />
        <section className='w-full flex flex-col items-center justify-center min-h-[70vh] text-white space-y-3'>
          <p className=' text-[1.70rem] w-[500px] text-center font-medium'>
            Contenidos Originales exclusivos, películas de éxito y series para maratonear
          </p>
          <p className='text-md'>Cancela cuando quieras.*</p>
          <p className='text-[#B3B4B5]'>Escribe tu dirección de correo electrónico para crear o reactivar tu suscripción.</p>
        </section>
        <section></section>
      </main >
    </>
  )
}

export default App
 