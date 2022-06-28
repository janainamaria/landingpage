import { Fragment, useRef, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main'
import MenuMobile  from './components/NavBar/NavBar'
import Products from './components/Products/Products'
import Sobre from './components/Sobre/Sobre'


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
