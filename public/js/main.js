// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

//myFunction();



const register = () => {
    console.log("diste un click");
    event.preventDefault()
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
   
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error1!");
        console.log("error2!");
        // ...
      });   
}

const logIn = () => {
    event.preventDefault()
    var emailLogin = document.getElementById("email-login").value;
    var passwordLogin = document.getElementById("password-login").value;

    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
    observer();

}
//validacion
const observer = () => {
  event.preventDefault()
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        //correct();
        console.log("existe usuario activo");
        // User is signed in.
        let displayName = user.displayName;
        let email = user.email;
        let emailVerified = user.emailVerified;
        let photoURL = user.photoURL;
        let isAnonymous = user.isAnonymous;
        let uid = user.uid;
        let providerData = user.providerData; 
        // ...
      } else {
        // User is signed out.
        // ...
        //incorrect();
        console.log("no existe usuario activo");

      }
    });
}


/*const correct = () => {
  var content = document.getElementById("appear")
  content.innerHTML = "<h2>Bienvenida</h2>";
}

const incorrect = () => {
  var content = document.getElementById("appear")
  content.innerHTML = "<h2>Usuario o contraseña incorrecta</h2>";
}*/


 // Login con Google
 const btngoogle = document.getElementById("btngoogle");
 
 const authCuentaGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
     const token = result.credential.accessToken;
    // Información de usuario
    const userData = result.user;
   /* saveData(userData.uid, userData.displayName, userData.email, userData.photoURL);
    window.location.href = 'timeline.html';*/
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
}
btngoogle.addEventListener("click", authCuentaGoogle());


 // Login con Facebook
 const btnfacebook = document.getElementById("btnfacebook");

 const loginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
     /* saveData(user.uid, user.displayName, user.email, user.photoURL);
      window.location.href = 'timeline.html';*/
    })
    .catch((error) => {
    });
}
btnfacebook.addEventListener("click", loginFacebook());