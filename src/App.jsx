import Header from './Header'
import { Landing } from './Landing'
import { PrimeSection } from './PrimeSection'
import { PaymentSection } from './PaymentSection'
import { Enjoy } from './Enjoy'
import { FAQs } from './FAQs'
import { Devices } from './Devices'
import { Footer } from './Footer'

function App() {

  return (
    <>
      <main className='bg-[url("/bgImage.jpg")] bg-cover min-h-screen after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-full after:w-full after:bg-gradient-to-t after:from-[#050614] after:via-40% after:via-[#040714]/90 after:to-transparent after:z-10 md:after:hidden' >
        <Header />
        <Landing id="PrimeSection" />
      </main >
      <PrimeSection />
      <PaymentSection />
      <Enjoy />
      <FAQs />
      <Devices />
      <Footer />
    </>
  )
}

export default App
