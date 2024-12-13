import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import GoToTop from "./components/Gototop"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Schedule from "./components/Schedule"
import Service from "./components/Service"

function App() {

  return (
    <div>
      <GoToTop/>
      <Header/>
      <Hero/>
      <Service/>
      <AboutUs/>
      <ContactUs/>
      <Schedule/>
      <Footer/>
      </div>
  )
}

export default App
