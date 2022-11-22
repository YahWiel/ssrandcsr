import express  from "express";
import fs from 'fs';
import path from "path";
import React from "react";
import ReactDomServer from "react-dom/server"
import App from '../src/app.jsx'
/* LO QUE NO ME AGRADA ES QUE EL PAQUETE DE REACT-SCRIPTS TIENE 6 VULNERABILIDADES DE ALTA GRAVEDAD */
const app =express();

app.get("/",(req,res)=>{
     fs.readFile(path.resolve("../build/index.html"),"utf-8",(err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).send("un error");
        }
        return res.send(data.replace(
            '<div id="root"></div>',
            `<div id="root">${ReactDomServer.renderToString(<App></App>)}</div>`
        ))
    }) 
   /*  let html= ReactDomServer.renderToString(<App></App>)

    res.send(html) ;  */
   
})

app.listen(8008,()=>{
    console.log("corriendo");
})