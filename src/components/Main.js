import '../components/Main.css'
import React, { Fragment } from 'react'
import homem from '../images/homem.svg'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import ScrollIntoView from 'react-scroll-into-view'


const Main = () => {
  return (
    <Fragment>
      <section className="secao">
        <div className="title">
          <h3>A maior plataforma de cursos</h3>
          <h1>
            Já são mais de <span>5 milhões</span>
          </h1>
          <h1>
            {' '}
            de <span>estudantes</span> conectados!
          </h1>
          <p>#1 Em serviços de educação de todo o Brasil</p>
          <div className="contact">
            <ScrollIntoView selector="#sobre">
            <button className='button-go-about'>
              QUERO PARTICIPAR{' '}
              <BsFillArrowDownCircleFill size={40} className="sacola" />
            </button>
            </ScrollIntoView>
          </div>
        </div>
        <div className="image">
          <img src={homem} />
        </div>
      </section>
    </Fragment>
  )
}
export default Main
