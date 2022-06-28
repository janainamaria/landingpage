import React, { Fragment, useState } from 'react'
import ReactCircleModal from 'react-circle-modal'
import { AiOutlineClose } from "react-icons/ai";
import './MenuModal.css'
import api from '../../utils/api/api'
import axios from "axios";

let state = {value: ''};


//  function cepVerify(e){

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
//   e.preventDefault();
// }

const Menu = () => {


   function buscaCep(e) {
    let cepCall;
    if(e.keyCode === 13){
  let options = {
    method:'GET',
    mode:'cors',
    cache:'default'
  }

    let CEP = e.target.value
     fetch(`https://viacep.com.br/ws/${CEP}/json/`,options)
    .then(response => response.json())
    .then((data) => {
      if(data.cep){
        alert("CEP encontrado! seu material de apoio esta a caminho!")
      }else{
        alert("CEP não encontrado!")
      }
    })
  }
  }
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
              <h3 className="titleModal">Consultar CEP</h3>
              <form class="login-form" onSubmit={(e)=>{e.preventDefault()}}>
                <input type="text"  name="CEP" placeholder="Digite seu cep" onKeyDown={(e)=>{buscaCep(e)}}/>
              </form>
            </div>
          </div></Fragment>
        )}
      </ReactCircleModal>
    )
  }
  
  export default Menu