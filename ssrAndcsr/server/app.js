//import "./index.cjs"
import express from "express";
import fs from 'fs';
import path from "path";

import React from "react";
import ReactDomServer from "react-dom/server";
import App from "../src/App.jsx"

const app=express();

app.get("/ssr",(req,res)=>{
    fs.readFile(path.resolve("../dist/index.html"),"utf-8",(err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).send("un error");
        }
        return res.send(data.replace(
            '<div id="root"></div>',
            `<div id="root">${ReactDomServer.renderToString(<App/>)}</div>`
        ))
    }) 
   /*  let html= ReactDomServer.renderToString(<App/>)

    res.send(html) ; */
})

app.use(express.static(path.resolve(__dirname,'..','dist')))

app.listen(8000,()=>{
    console.log("corriendo");
})