const Sequelize = require('sequelize');

const connection = require('../database/database');

/*
PARAMETROS DO MÉTODO DEFINE
1 - NOME DA TABELA - STRING
2 - OBJETO JSON: 
                NOME DO CAMPO DA TABELA
                TIPO DE DADO DO CAMPO DA TABELA
                REGRAS DO CAMPO DA TABELA (NULL, NOT NULL, DEFAULT...ETC)
*/
const modelProcedimento = connection.define(
    'tbl_procedimento',
    {
        cod_procedimento:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        servico_procedimento:{
            type:Sequelize.STRING(100),
            allowNull:true
        },
        descricao_procedimento:{
            type:Sequelize.STRING(100),
            allowNull:true
        }
    }
);

// modelProcedimento.sync({force:true});

module.exports = modelProcedimento;