import React, { Fragment } from 'react'
import ReactCircleModal from 'react-circle-modal'
import { AiOutlineClose } from "react-icons/ai";
import menu from './MenuModal.css'


const Menu = () => {
    return (
      <ReactCircleModal
        backgroundColor="var(--grey)"
        toogleComponent={onClick => (
          <a href onClick={onClick}>
            Assinar
          </a>
        )}
       
        offsetX={0}
        offsetY={0}
      >
        {(onClick) => (

            <Fragment>
            <a onClick={onClick} className='exit'>
            <AiOutlineClose size={25}/>
            </a>
            <div class="login-page">
            <div class="form">
              <form class="register-form">
              </form>
              <form class="login-form">
                <input type="text" placeholder="Digite seu cep"/>
            
                <button className='search'>Procurar</button>
           
              </form>
            </div>
          </div></Fragment>
        )}
      </ReactCircleModal>
    )
  }
  
  export default Menu