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
         const auth = new Autenticacion ()
         auth.authEmailPass(email, password)
    });

    //contralor que habilita el click cuando de een el icono de google
    // checar linea 3 lo que esta con *, luego mandamos llamar nuestro metodo que originalmente esta en autenticación.js
    $("#authGoogle").click(() => objAuth.authCuentaGoogle());
    
     //contralor que habilita el click cuando de een el icono de google
    // checar linea 3 lo que esta con *, luego mandamos llamar nuestro metodo que originalmente esta en autenticación.js
    $("#authFB").click(() => objAuth.authCuentaFacebook() );

    //$("#authTwitter").click(() => //AUTH con Twitter);

    $('#btnRegistrarse').click(() => {
        $('#modalSesion').modal('close');
        $('#modalRegistro').modal('open');
    });

    $('#btnIniciarSesion').click(() => {
        $('#modalRegistro').modal('close');
        $('#modalSesion').modal('open');
    });

});