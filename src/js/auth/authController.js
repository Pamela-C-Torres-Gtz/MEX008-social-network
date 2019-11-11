$(() => {    
     //*Vamos a crear una constante que es el objeto de la instancia de la clase de Autenticacion
     const objAuth = new Autenticacion()

    $("#btnRegistroEmail").click(() => {
        const nombres = $('#nombreContactoReg').val();
        const email = $('#emailContactoReg').val();
        const password = $('#passwordReg').val();
        // Llamamos crear metodo con email para la autenticación
        const auth = new Autenticacion()
        auth.crearCuentaEmailPass(email, password, nombres)
    });

   //para la autenticación  
    $("#btnInicioEmail").click(() => {
        const email = $('#emailSesion').val();
        const password = $('#passwordSesion').val();
         // LLamar nuevamante la clase de autentificación la cuenta con email
         const auth = new Autenticacion()
         auth.authEmailPass(email, password)
    });
  
    $("#authGoogle").click(() => objAuth.authCuentaGoogle());//se habilita el click en icono de google.

    $("#authFB").click(() => objAuth.authCuentaFacebook())//se habilita el click en icono de facebock.
    
    $("#authGitHub").click(() => objAuth.authGitHub())//se habilita el click en icono de github.

    $('#btnRegistrarse').click(() => {
        $('#modalSesion').modal('close');
        $('#modalRegistro').modal('open');
    });

    $('#btnIniciarSesion').click(() => {
        $('#modalRegistro').modal('close');
        $('#modalSesion').modal('open');
    });

});