class Autenticacion {
  autEmailPass(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(result => {
        if (result.user.emailVerifid) {
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
          url: '' //colocamos la url del localhost que nos proporciona Firebase
        }
        result.user.sendEmailVerification(configuracion)
          .then((result) => console.log(result))
          .catch(err => { // recibe la promesa con error y aqui es donde podemos mostrar un mensaje
            console.error(err)
            Materialize.toast(err.message, 4000)
          })
      }).catch( err => {
        console.error(err)
        Materialize.toast(err.message, 4000)
      });




    //con esta instruccion le indicamos a firebase que no guarde las credenciales del usuario hasta
    //que se logee con el link de verificación
    firebase.auth().signOut()
    // damos mensaje de bienvenida al usuario y decimos que  tiene que realizar el proceso de verificación
    Materialize.toast(
      `Bienvenido ${nombres}, debes realizar el proceso de verificación`,
      4000
    )
    //cerramos la ventana emergente
    $('.modal').modal('close')


}

authCuentaGoogle() {
  const provider = new firebase.authGoogleAuthProvider();
  /*[] llamamos un metodo llamado .signInWithPopup (loque hace firebase es abrir una 
    venta emergente para pedir estas credenciales) y luego le pasamos al proveedor (provider)*/
  firebase.auth().signInWithPopup(provider)
    .then(result => { // colocamos nuestra promesa
      //aqui //aqui vamos a colocar la foto que tenemos en nuestra cuenta de google
      $('#avatar').attr('src', result.user.photoURL) //nos devuelve el usuario y el atributo de la foto url
      $('.modal').modal('close')
      Materialize.toast(`Bienvenida ${result.user.displayName} !!`, 4000) //este result me muestra el usurio y el nombre que la persona coloco en su cuenta de google
    })
    //con esto mostramos si tenemos algun error
    .catch(err => {
      console.error(err)
      Materialize.toast(`Error al autenticarse con google: ${err}`, 4000)
    })
}

authCuentaFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider();
  //[]pasamos las mismas lineas de código que con goole
  /*llamamos un metodo llamado .signInWithPopup (loque hace firebase es abrir una 
    venta emergente para pedir estas credenciales) y luego le pasamos al proveedor (provider)*/
  firebase.auth().signInWithPopup(provider)
    .then(result => { //colocamos nuestra promesa

      //aqui vamos a colocar la foto que tenemos en nuestra cuenta de faceboock
      $('#avatar').attr('src', result.user.photoURL) //nos devuelve el usuario y el atributo de la foto url
      $('.modal').modal('close')
      Materialize.toast(`Bienvenida ${result.user.displayName} !! `, 4000) //este result me muestra el usurio y el nombre que la persona coloco en su cuenta de google
    })
    //con esto mostramos si tenemos algun error
    .catch(err => {
      console.error(err)
      Materialize.toast(`Error al autenticarse con Facebook: ${err}`, 4000)
    })
}

authTwitter() {
  // TODO: Crear auth con twitter
}
}