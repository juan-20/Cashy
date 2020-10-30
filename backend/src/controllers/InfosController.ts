import { getRepository, Index } from 'typeorm';
import info from '../models/info';
import {Request, Response} from 'express';
import {useState} from 'react';
import infoView from '../views/infos_view';
import * as Yup from 'yup';
import Info from '../models/info';


export default{

    async Index(request: Request, response: Response){

        const InfoRepository = getRepository(Info);

        const info = await InfoRepository.find();

        
        return response.json(infoView.renderManny(info));
        
    },


    async show(request: Request, response: Response){
        // pega o id pelo http
        const { id } = request.params;

        const InfosRepository = getRepository(Info);

        // tenta achar o id ou dá erro
        const info = await InfosRepository.findOneOrFail(id);

        return response.json(infoView.render(info));
      
    },


    async create(request: Request, response: Response){
    
        let {
            nome,
            cep,
            renda,
            dependentes,
            endereco,
            renda_per_capita,
        } = request.body
    
        const InfoRepository = getRepository(Info);

    

        let data = {
            nome,
            cep,
            renda,
            dependentes,
            endereco,
            renda_per_capita,
        };

        renda_per_capita = renda/dependentes;

        // interface pra receber a informação da API
        interface ServerResponse {
            logradouro: string;
            bairro: string;
            localidade: string;
            uf: string;
        }
         
        async function loadData(){
            // api com o cep colocado pra fazer a filtragem
            const response = await fetch(`viacep.com.br/ws/${endereco}/json/`)
        const [end, setEndereco] = useState<ServerResponse>();
        const localizacao = await response.json();

        console.log(localizacao);

        return localizacao?.uf;
        }

       

        // validação
        const schema = Yup.object().shape({
            nome:             Yup.string().required(),
            cep:              Yup.number().required(),
            renda:            Yup.number().required(),
            dependentes:      Yup.string().required().max(8),
        });

        const finalData = schema.cast(data);

        // mostra qual campo não esta valido e cancela tudo
        await schema.validate(data, {
            abortEarly: false,
        });
    
        const info = InfoRepository.create(data);
    
        await InfoRepository.save(info);
    
    
        return response.status(201).json(info);
    }
      
    }
