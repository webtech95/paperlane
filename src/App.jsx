
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Footer from './components/Footer'
import Product from './components/pages/Product'
import UseCases from './components/pages/UseCases'
import Pricing from './components/pages/Pricing'
import Resources from './components/pages/Resources'
import WaitlistCTA from './components/WaitlistCTA'
import ScrollToTop from "./components/ScrollToTop"

function App() {

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/useCases' element={<UseCases />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/resources' element={<Resources />} />
      </Routes>
      <WaitlistCTA />
      <Footer />
    </>
  )
}

export default App
