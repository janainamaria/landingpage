import { Fragment, useRef, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import MenuMobile  from './components/NavBar'
import Products from './components/Products'
import Sobre from './components/Sobre'


import { BrowserRouter } from 'react-router-dom'

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
     
    <Fragment>
        <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header  setMenuIsVisible={setMenuIsVisible} />
      <Main />
      <Products />
    
      <Sobre />
      <Footer />
    </Fragment>
     
  )
}

export default App
