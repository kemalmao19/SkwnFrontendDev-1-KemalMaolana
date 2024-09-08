import './App.css'
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { Why } from "./components/Why/Why"
import { Category } from "./components/Category/Category"
import { Products } from "./components/Products/Products"
import { Limited } from "./components/Limited/Limited"
import { Footer } from './components/Footer/Footer'


function App() {

  return (
    <h1>
      <Header/>
      <Hero/>
      <Why/>
      <Category />
      {/* <Products /> */}
      <Limited />
      <Footer />
    </h1>
  )
}

export default App
