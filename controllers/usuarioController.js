const getUsuario=(req,res)=>{
    const usuario=[{
        nombre:"Elvis",
        apellido:"Manco"
    }]
    return res.json(usuario);
}

module.exports={getUsuario}