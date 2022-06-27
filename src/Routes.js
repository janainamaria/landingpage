import React, { Fragment } from "react";
import { Route,Routes, Router } from "react-router-dom";

import Footer from './components/Footer'
import Header from './components/Header'
import Products from './components/Products'
import Sobre from './components/Sobre'

export default props =>(

    <Routes>
        <Route exact path="/" element={<Header />}/>
        <Route exact path="/products" element={<Products />}/>
        <Route exact path="/about" element={<Sobre />}/>
        <Route exact path="/footer" element={<Footer />}/>
    </Routes>
)