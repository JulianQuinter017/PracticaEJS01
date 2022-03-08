const http = require("http");
const express = require("express");
const { response } = require("express");
const app = express();

app.get('/',(req,res)=>{

    res.send("Iniciando Servidor");
})

const puerto = 3000;
app.listen(puerto,()=>{

    console.log("Escuchando");
});