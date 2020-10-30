import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/Header';

import Image1 from '../../images/dashboard-image.svg';
import Image2 from '../../images/dashboard-image2.svg';
import Image3 from '../../images/dashboard-image3.svg';
import api from '../../services/api';

import './styles.css'




interface info {
   id: number;
   nome: string;
   cep: number;
   renda: number;
   dependentes: number;
   endereco: string;
   renda_per_capita: number;
 }
 
 interface infoParms {
   id: string;
 }



function Dashboard(){


   const params = useParams<infoParms>();
   const [info, setinfo] = useState<info>();
   useEffect(() => {
     api.get(`infos/${params.id}`).then((response) => {
       setinfo(response.data);
     });
   }, [params.id]);
 
   // como não carrega poruqe não consigo dar post na api ele só vai mostrar carregando então comentei para não ter problema


   // if (!info) {
   //   return <p>Carregando...</p>;
   // }





    return(
       <main>
      <div className="dachboard-page">

          <PageHeader title="Resultado:" />

          <div className="nome-session">
               
                     
               <div className="image">
                  <img src={Image3} alt="Juan Andrade"/>
                </div>
               
                   <h1>Olá: </h1>
                   <h3>Juan </h3>
                   {/* como ele não pega o params (id) deixei comentado a forma que coloca a variavel para ver */}
                   {/* <h3>{info?.nome} </h3> */}
               
          </div>

           <div className="renda-session">

          
               
                     
                    <div className="image">
                       <img src={Image1} alt="Juan Andrade"/>
                     </div>
                    
                        <h1>Sua renda per capita: </h1>
                        <h3>R$ 1000 </h3>
                        <h1>por pessoa</h1>
               </div>


           <div className="cep-session">
               
                     
                    <div className="image">
                       <img src={Image2} alt="Juan Andrade"/>
                     </div>
                    
                        <h1>Sua Cep é de: </h1>
                        <h3> 31015390 </h3>
                    
                        <h1>E seu endereço é: </h1>
                        <h3> Rua Legal</h3>
               </div>
          
        </div>
        </main>
    );
}

export default Dashboard;