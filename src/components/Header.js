import '../components/Header.css'
import React, { Fragment } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import MenuMobile from './NavBar'

const Header = ({setMenuIsVisible}) => {
  return (
    <Fragment>
      <header>
        <div className="container">
          <div className="logo">
            <ul className="menu">
              <li>
                <h2>
                  Cursos<span>DM</span>
                </h2>
              </li>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                {' '}
                <a href="#cursos">Cursos</a>
              </li>
              <li>
                {' '}
                <a href="#">Sobre</a>
              </li>

              <li>
                <a href="#" className="button">
                  Compre aqui
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section>
        <RiMenu3Fill onClick={()=> setMenuIsVisible(true)} className="mobile" size={25}/>
      </section>
      </header>
    </Fragment>
  )
}

export default Header
