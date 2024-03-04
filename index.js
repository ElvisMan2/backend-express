const usuarioRoutes= require('./routes/usuario')
const express= require("express");
const app=express();
const PORT=process.env.PORT||3000;
usuarioRoutes(app);

app.listen(PORT);

console.log("app ejecutandose")