import React, { Fragment } from 'react'
import ReactCircleModal from 'react-circle-modal'
import { AiOutlineClose } from "react-icons/ai";
import './MenuModal.css'
import api from '../../utils/api/api'
import axios from "axios";

let cep;
function handleChange(e) {
  cep+=e.target.value
}
 function cepVerify(e){
  console.log(cep)
//    let cepNumber = document.getElementById('cep').value
//   console.log(e.target)
//   let cepCall;
//   let options = {
//     method:'GET',
//     mode:'cors',
//     cache:'default'
//   }
//   if(!cepNumber || cepNumber === "" || cepNumber.lenght < 7 || cepNumber === undefined || cepNumber === 'undefined'){

//     fetch(`https://viacep.com.br/ws/${cepNumber}/json/`,options)
//     .then(response => response.json())
//     .then(data => {
// cepCall = data
//     })
//     .catch(err => {
//       console.log(err)
//     })
//     console.log(cepCall)
//   }else{
//     console.log("Nenhum CEP enviado")
//   }
  e.preventDefault();
}

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
              <form class="login-form" onSubmit={cepVerify}>
                <input type="text" placeholder="Digite seu cep" onChange={handleChange}/>
            
                <button className='search' type='submit' >Confirmar</button>
                <p id="result"></p>
           
              </form>
            </div>
          </div></Fragment>
        )}
      </ReactCircleModal>
    )
  }
  
  export default Menu