// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDwACSIg8suX9RAdV7h_UKETj9gA_4J9SU",
    authDomain: "womendevs-9c071.firebaseapp.com",
    databaseURL: "https://womendevs-9c071.firebaseio.com",
    projectId: "womendevs-9c071",
    storageBucket: "",
    messagingSenderId: "234094838471",
    appId: "1:234094838471:web:83fa9853d4dd595e"
  };
  // Init Firebase nuevamente
  firebase.initializeApp(firebaseConfig);


  // Guardar datos de las usuarias en la BD
const saveData = (userId, name, email, imageUrl) => {
  firebase.database().ref('users/' + userId).
  set({
    username: name,
    email: email,
    picture: imageUrl,
    id: userId,
  });
}

// Registro de Usuarios Nuevos
const crearCuentaEmailPass(email, password, nombres) = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      const user = result.user;
      if (user.displayName == null) {
        username = document.getElementById('nameUser').value;
      } else {
        username = user.displayName;
      }
      if (user.photoURL == null) {
        picture = "https://thumbs.dreamstime.com/b/icono-del-usuario-46707697.jpg";
      } else {
        picture = user.photoURL;
      }
      saveData(user.uid, username, user.email, picture);
      check();
      alert('Tu usuario ha sido registrado! \nConfirma el mensaje de verificación en tu correo y seguidamente puedes Iniciar Sesión');
      formRegister.classList.add('hidden');
      formInicio.classList.remove('hidden');
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      if (error.message === 'auth/email-already-in-use') {
        validInputs.innerHTML = "El email ingresado ya está en uso";
      } else if (error.message === 'The email address is already in use by another account.') {
        validInputs.innerHTML = "El email está siendo utilizado por otro usuario";
      }
    })
}