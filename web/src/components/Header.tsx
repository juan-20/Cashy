import React from 'react';
import { Link } from 'react-router-dom';

// import { IoIosArrowRoundBack } from 'react-icons/io';

import back from '../images/icons/back.svg'
import logo from '../images/logo-teste.svg'

import '../styles/components/header.css';


interface PageHeaderProps{
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) =>{
    return(
        <header className="page-header">
        <div className="top-bar-container">
            <div className="back-icon">
            <Link  to='/'>
            <img src={back} alt="Voltar"></img>
            </Link>
            </div>
            <img src={logo} alt="logo"></img>
        </div>
            <div className="header-content">
    <strong>{props.title}</strong>

     {/* pega o escito no tsx de origem e mescla com a interface */}
     {props.children}
            </div>
           
    </header>

    );
}

export default PageHeader;