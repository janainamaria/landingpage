import React, { Fragment, useEffect, useState } from 'react'
import ReactCircleModal from 'react-circle-modal'
import { AiOutlineClose } from "react-icons/ai";
import api from '../../utils/api/api'


const Menu = () => {
  const [cep, cepCall] = useState();

  useEffect(() => {
    api
      .get("/users/romulo27")
      .then((response) => cepCall(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
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