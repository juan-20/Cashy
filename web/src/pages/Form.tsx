import React, {useState, FormEvent} from 'react'
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';

import api from "../services/api";

import '../styles/pages/form.css' 



import Input from '../components/Input';
import PageHeader from '../components/Header';


function Form(){
  // pega o historico do http//
  const history = useHistory();

  const [nome, setNome]               = useState("");
  const [cep, setCep]                 = useState("");
  const [renda, setRenda]             = useState("");
  const [dependentes, setDependentes] = useState("");


  async function handleSubmit(event: FormEvent) {
    debugger

    event.preventDefault();

    const data = new FormData();

    data.append("nome",        nome);
    data.append("cep",         cep);
    data.append("renda",       renda);
    data.append("dependentes", dependentes);

    // faz o post na API
    await api.post("infos", data);

    alert("Cadastro com Sucesso!");
    // encaminha para outra pagina
    history.push("/dashboard");
  }


    return(
        <div id="form-page">
            <div className="Header">
            
            <PageHeader title="Digite os valores:"/>
            </div>


       <article className="form-item">
         <form onSubmit={handleSubmit} >
        <header>

           
        </header>
             
          <main>
              <fieldset>
              <legend>Seus Dados</legend>

          <Input alt="Digite seu nome completo"
          id="name"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          type="text"   name="Nome" label="Nome Completo" />

          <Input alt="Digite seu CEP"
           id="cep"
           value={cep}
           onChange={(event) => setCep(event.target.value)} maxLength={8}
           type="number"   name="CEP" label="CEP" />

          <Input alt="Digite sua renda mensal"
           id="renda"
           value={renda}
           onChange={(event) => setRenda(event.target.value)}
           type="number"   name="Renda mensal" label="Renda mensal" />

          <Input alt="Digite o número de dependentes"
           id="dependentes"
           value={dependentes}
           onChange={(event) => setDependentes(event.target.value)}
           type="number"   name="Número de dependentes" label="Número de dependentes" />



            <footer>
          {/* <p>
            <img alt="Aviso Importante" />
            Importante <br />
            Preencha todos os dados
          </p> */}
          <button className="confirm-button" type="submit">
            Calcular🧮
          </button>

          </footer>
          </fieldset>


      </main>
      </form>
    </article> 
    </div>
    );

}

export default Form;