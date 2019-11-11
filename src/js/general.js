$(() => {
  $('.tooltipped').tooltip({ delay: 50 })
  $('.modal').modal()


  // Init Firebase nuevamente
  firebase.initializeApp(firebaseConfig);
  

  // TODO: Evento boton inicio sesion
  $('#btnInicioSesion').click(() => {
    //$('#avatar').attr('src', 'imagenes/usuario.png')
    // Materialize.toast(`Error al realizar SignOut => ${error}`, 4000)
    

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
