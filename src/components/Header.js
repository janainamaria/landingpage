import '../components/Header.css'
import React, { Fragment } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import MenuMobile from './NavBar'
import MenuModal from './MenuModal'
import ScrollIntoView from 'react-scroll-into-view'

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
              <ScrollIntoView selector="#home">
            <button className='button-header'>
              Home{' '}
            </button>
            </ScrollIntoView>
              </li>
              <li>
                {' '}
                <ScrollIntoView selector="#cursos">
            <button className='button-header'>
              Cursos{' '}
            </button>
            </ScrollIntoView>
              </li>
              <li>
                {' '}
                <ScrollIntoView selector="#sobre">
            <button className='button-header'>
              Sobre{' '}
            </button>
            </ScrollIntoView>
              </li>

              <li>
           
                <div className='assinar'>
            <MenuModal/>
            </div>
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
