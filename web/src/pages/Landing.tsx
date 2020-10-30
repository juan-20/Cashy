import React from 'react'
import {Link} from 'react-router-dom';

import { FiArrowRight, FiList,  } from 'react-icons/fi';
import logoImg from '../images/logo.png';
import LandingImg from '../images/Landing.svg';

import '../styles/pages/landing.css' 


function Lnading(){
    return(
        <div id="page-landing">
         
        <div className="content-wraper">
   
           <main>
             <h1>Quer economizar?</h1>
             <p>Veja sua renda per capita clicando no botão.</p>
           </main>
   
           <div className="Welcome">
             <strong>Seja bem-vindo!</strong>
             <span>🤍</span>

             <div className="image">
          <img src={LandingImg} alt="Cashy"/>
          </div>

           </div>
   
           <Link to="/app" className="enter-app">
             
             <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
           </Link>

        </div>
      </div>
    );

}

export default Lnading;