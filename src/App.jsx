
import './App.css'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {

  return (
    <div className='min-h-screen bg-slate-800'>
      <Header />
      <Hero />
      <Cart/>
      <Footer/>
    </div>
  )
}

export default App
