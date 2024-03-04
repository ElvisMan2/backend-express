const usuarioController=require('../controllers/usuarioController');
module.exports=(app)=>{
    app.route('/usuario').get(usuarioController.getUsuario)
}