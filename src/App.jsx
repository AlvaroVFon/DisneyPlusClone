import Header from './Header'
import { Landing } from './Landing'
import { PrimeSection } from './PrimeSection'
function App() {

  return (
    <>
      <main className='bg-[url("/bgImage.jpg")] h-screen' >
        <Header />
        <Landing/>
      </main >
      <PrimeSection/>
    </>
  )
}

export default App
 