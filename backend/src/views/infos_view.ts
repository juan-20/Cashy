import Info from '../models/info';

export default {
    render(info: Info){

        return{
            id:               info.id,
            nome:             info.nome,
            cep:              info.cep,
            renda:            info.renda,
            dependentes:      info.dependentes,
            endereco:         info.endereco,
            renda_per_capita: info.renda_per_capita,
        };
    },

    renderManny(infos: Info[]){

        return infos.map(info => this.render(info));
    },



}