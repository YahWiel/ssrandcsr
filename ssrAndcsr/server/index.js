/* import "ignore-styles";
import re from "@babel/register";

re({
    ignore:[/(node_module)/],
    presets:['@babel/preset-env','@babel/preset-react']    
})
import "./app.js" */


require("ignore-styles");
require("@babel/register")({
    ignore:[/(node_module)/],
    presets:['@babel/preset-env','@babel/preset-react']    
})

require("./app.js")

