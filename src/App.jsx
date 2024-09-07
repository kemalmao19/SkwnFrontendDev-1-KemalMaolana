import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { Why } from "./components/Why/Why"
import { Category } from "./components/Category/Category"
import './App.css'


function App() {

  return (
    <h1>
      <Header/>
      <Hero/>
      <Why/>
      <Category />
    </h1>
  )
}

export default App
