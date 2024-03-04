const usuarioRoutes= require('./routes/usuario')
const express= require("express");
const app=express();
const port=3000;
usuarioRoutes(app);

app.listen(port);

console.log("app ejecutandose")