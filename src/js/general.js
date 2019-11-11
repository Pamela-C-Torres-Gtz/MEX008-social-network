$(() => {
  $('.tooltipped').tooltip({ delay: 50 })
  $('.modal').modal()


  // Init Firebase nuevamente
  firebase.initializeApp(firebaseConfig);
  
  //trabajamos con es observador del estado para manejar las cuentas de usuario.
  firebase.auth().onAuthStateChanged(user =>{
    if(user){
      $('#btnInicioSesion').text('Salir')
      if(user.photoURL){
       /$('#avatare').attr('src', user.photoURL)
      }
    }
  })

  // TODO: Evento boton inicio sesion que cambie con el estado del logeo
  $('#btnInicioSesion').click(() => {
    const user = firebase.auth().currentUser
    if(user){
      $('#btnInicioSesion').text('Iniciar Sesion')
      return firebase.auth().signOut().then(() => {
        $('#avatar').attr('src', 'imagenes/usuario.pgn')
        Materialize.toast(`SignOut Correcto`, 4000)
      }).chatch(err =>{
        Materialize.toast(`Error al realizar SingOut => ${error}`, 4000)
      })
    }
    
    //Solo si esta bien la autenticación el se borraran los valores de pasword y email
    $('#emailSesion').val('')
    $('#passwordSesion').val('')
    $('#modalSesion').modal('open')
  })

  //Función para hacer que el susuario salga al dar click a la foto del avatare
  $('#avatar').click(() => {
    //llamamos a la libreria firebase y creamos nuestra promesa qu es .signOut
     firebase.auth().signOut()
     .then(() => {
       $('#avatar').attr('src','imagenes/usuario.png')
       Materialize.toast(`SignOut correcto`, 4000)
     })
    .catch(err => {
      Materialize.toast(`Error al realizar SignOut ${err}`, 4000)
    })
  })

  $('#btnTodoPost').click(() => {
    $('#tituloPost').text('Posts de la Comunidad')   
  })

  $('#btnMisPost').click(() => {
    //$('#tituloPost').text('Mis Posts')
    //Materialize.toast(`Debes estar autenticado para ver tus posts`, 4000)    
  })
})
