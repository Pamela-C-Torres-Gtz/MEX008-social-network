// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBpOxYDjb9ul17eymW4maik_ZOxB6b0xcA",
    authDomain: "prueba-de-redsocial.firebaseapp.com",
    databaseURL: "https://prueba-de-redsocial.firebaseio.com",
    projectId: "prueba-de-redsocial",
    storageBucket: "prueba-de-redsocial.appspot.com",
    messagingSenderId: "792801296519",
    appId: "1:792801296519:web:258f0469db05285f"
  };

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
