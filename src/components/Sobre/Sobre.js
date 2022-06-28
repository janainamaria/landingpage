import './Sobre.css'
import React, { Fragment } from 'react'
import alunos from '../../images/estudantes.jpg'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import MenuModal from '../MenuModal/MenuModal'

const Sobre = () => {
  return (
  <Fragment>
      <section className="sobre" id='sobre'>
        <div className="texto">
          <h3>Sobre nossa plataforma:</h3>
          <div className="paragrafo">
            <p>
              <AiOutlineCheckCircle size={20} className="icon" /> Somos os
              maiores na aréa da educação.
            </p>
            <p>
              <AiOutlineCheckCircle size={20} className="icon" /> Certificado
              garantido reconhecido pelo mec.
            </p>
            <p>
              <AiOutlineCheckCircle size={20} className="icon" /> Material
              didatico de primeira.
            </p>
            <p>
              <AiOutlineCheckCircle size={20} className="icon" /> Melhores
              professores do pais.
            </p>
          </div>
            <MenuModal/>
        </div>
        <div className="imagem">
          <img src={alunos} />
        </div>
      </section>
    </Fragment>
  )
}
export default Sobre
