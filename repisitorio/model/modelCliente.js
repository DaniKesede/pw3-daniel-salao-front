const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelProcedimento = require('./modelProcedimento')

/*
PARAMETROS DO MÉTODO DEFINE
1 - NOME DA TABELA - STRING
2 - OBJETO JSON: 
                NOME DO CAMPO DA TABELA
                TIPO DE DADO DO CAMPO DA TABELA
                REGRAS DO CAMPO DA TABELA (NULL, NOT NULL, DEFAULT...ETC)
*/
const modeCliente = connection.define(
    'tbl_cliente',
    {
        id_cliente:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        id_procedimento:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nome_cliente:{
            type:Sequelize.STRING(100),
            allowNull:true
        },
        whatsapp_cliente:{
            type:Sequelize.STRING(100),
            allowNull:true
        },
        endereco_cliente:{
            type:Sequelize.STRING(500),
            allowNull:true
        },
    }
);

/*Implementação da  CHAVE ESTRANGEIRA - LADO N*/
modelProcedimento.hasMany(modeCliente, {
    foreignKey: 'cod_procedimento',
    sourceKey: 'cod_procedimento'
});

/*Implementação da  CHAVE PRIMÁRIA - LADO 1*/
modeCliente.belongsTo(modelProcedimento, {
    foreignKey: 'cod_procedimento',
    sourceKey: 'cod_procedimento'
});

// modeCliente.sync({force:true});

module.exports = modeCliente;