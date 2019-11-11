class Autenticacion {
  authEmailPass(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password) //esto de forma asincrona
      .then(result => {
        if (result.user.emailVerified) {
          $('#avatar').attr('src', 'imagenes/usuario_auth.png')
          Materialize.toast(`Bienvenida ${result.user.displayName}`, 5000)
        } else {
          firebase.auth().signOut()
          Materialize.toast(`Por favor realiza la verificación de tu cuenta`, 5000)
        }
      })
    $('.modal').modal('close')
  }

  crearCuentaEmailPass(email, password, nombres) { // mi funcion de autenticacion con email y password
    firebase.auth().createUserWithEmailAndPassword(email, password) //mi promesa
      .then(result => { //recibe mi promesa bien ejecutada
        //me muestra como resultado la actualizacion en tiempo real de mi usuario
        result.user.updateProfile({
          displayName: nombres
        })

        //Esa funcion crea un boton de continuar en la pagina de firebase para que direcciones a nuestra app web
        const configuracion = { // creo una constante donde direccionara a nuestra sitio web despues de validarse
          url : 'https://pamela-c-torres-gtz.github.io/MEX008-social-network/src/index.html' //colocamos la url del localhost que nos proporciona Firebase
        }
        result.user.sendEmailVerification(configuracion)
        .then((result) => console.log(result))
            .catch(err => {
             console.error(err)
             Materialize.toast(err.message, 4000)
          })
          //con esta instruccion le indicamos a firebase que no guarde las credenciales del usuario hasta
         //que se logee con el link de verificación
         firebase.auth().signOut()
        // damos mensaje de bienvenida al usuario y decimos que  tiene que realizar el proceso de verificación
        Materialize.toast(
      `Bienvenido ${nombres}, debes realizar el proceso de verificación`,
      4000)
    //cerramos la ventana emergente
    $('.modal').modal('close')
    }) .catch(err => {
        console.error(err)
        Materialize.toast(err.message, 4000)
      })
} 

authCuentaGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(result => {  //con esto el usuario solo usara sus credenciales de google
    $('#avatar').attr('src', result.user.photoURL)
    Materialize.toast(`Bienvenido ${result.user.displayName} !! `, 400)
  })
    .catch(error =>{
      console.error(error)
      Materialize.toast(`Error al autenticarse con Google: ${error} `, 4000)
    })
}

authCuentaFacebook() {
 
}

authTwitter() {
  // TODO: Crear auth con twitter
}
}