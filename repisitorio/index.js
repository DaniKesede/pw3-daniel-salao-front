const express = require('express');
const cors = require('cors');

const routerCliente = require('./route/routesCliente');
const routesProcedimento = require('./route/routesProcedimento');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', routerCliente);
app.use('/', routesProcedimento);

app.listen(5000, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:5000');
});