import '../components/Products.css'
import React, { Fragment, useRef } from 'react'
import {
  BsBookHalf,
  BsFillCalculatorFill,
  BsFillCameraFill,
  BsFillTelephoneFill
} from 'react-icons/bs'

const Products = () => {
  let ref1 = useRef();
ref1.current = 'cursos'

  return (
    <Fragment>
      <section className="section-cards" id='cursos' ref={ref1}>
        <h3>Nossos principais cursos</h3>
        <div className="cards">
          <div className="card">
            <BsBookHalf size={80} />
            Bliblioteconomia
          </div>
          <div className="card">
            <BsFillCalculatorFill size={80} />
            Contabilidade
          </div>
          <div className="card">
            <BsFillCameraFill size={80} />
            Fotografia
          </div>
          <div className="card">
            <BsFillTelephoneFill size={80} />
            Telemarketing
          </div>
        </div>
      </section>
    </Fragment>
  )
}
export default Products
