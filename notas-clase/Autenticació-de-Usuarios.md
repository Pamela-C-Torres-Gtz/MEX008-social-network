CURSO DE FIREBASE PARA LA WEB
===============================

# Índice 

* [3. Autenticación de USuarios](#3.-autenticación-de-usuarios)
   * >[3.1 Servicios de autenticación y configuración de usuarios](#3.1-servicios-de-autenticación-y-configuración-de-usuarios)
   * >[3.2 Autenticación por email y Redes Sociales](#3.2-autenticación-por-email-y-redes-sociales)
   * >[3.3 Probar creación de usuario y autenticación](#3.3-probar-creación-de-usuario-y-autenticación)
   * >[1.4 Empresas que usan Firebas](#1.4-empresas-que-usan-Firebase)



## 3. Autenticación de USuarios

## *3.1 Servicios de autenticación y configuración de usuarios*

Podemos configuración nuestro inicio de seci+po n para nuestra app creando usuarios ya sea con email y pasword o con redes sociales *(GoogleAccounts, Facebbok,Twitter, Github o incluso nuestros proveedores personalizados)*.

Firebase nos proporciona SDKs (Software Development Kits) para facilitar la programación y configuración de estas funcionalidades en los lenguajes y plataformas más comunes.

Gracias a esta herramienta podemos ahorrar tiempo de programación de estas mismas funcionalidades que utiliariamos si lo realizamos poer nuestra cuenta.

Pasoso a seguir:

 * 1. Nos vamos a nuestra *Consola de Firebase*
 * 2. Seleccionamos *Documentación de Firebase*.
 * 3. Copiamo el script general que necesitaremos para la autenticación. Y lo pegamos en nuestra pagina HTML debajo del script de configuración.
 

 ## *3.2 Autenticación por email y Redes Sociales*

 Nos vamos primero a la consola de *Firebase* y selecionamos **Autenticación**.

  * 1. En la pestaña de *Método de inicio de sección*, seleccionamos *Correo electronico y contraseña*. Y **Habilitamos esta sección**.
  * 2. Despues damos **Guardar**.
  * 3. Ahora nos vamos a nuestra consola y abrimos nuestra carpeta *auth* previamente creada.
  * 4. Creamos el archivo *autenticacion.js* donde colacaremos las credenciales que nos proporciona firebase.
  * 5. creamos la funcion de **crearCuentaEmailPass**
    * 5.1 creamos la autenticación con gmail y pasword.
    * 5.2 cramos la validación del usuario con las promesas y retornamos error en caso de no realizar el proceso.
  * 6. ahora creamos un archivo *authController.js* donde indicaremos la funcionalidad de la autenticación con la apararicion de los modales.


 ## *3.3 Probar creación de usuario y autenticación*

1.  Para probar la autenticación revisar las notas de los archivos **authController.js** y **autenticacion.js** de la carpeta *auth*.

 En cada paso coloco las notas necesarias. El funcionamiento de esta sección es el siguiente:

 * Que se cree el usuario con una cuenta de correo electronico y contraseña.

 * Que se le enviee un mensaje de autenticación a su correo y  tiene que validar su correo por medio del link que se le proporciono.

 * Posteriormente regresa a la pagina e inicia seción con el correo y password que indico.

 * Al accesar se muestra un mensaje de bienvenida y el avatar cambia. *(Por el momento solo con una imagen predefinida en la carpeta local)*.

2. Creamos función para que salga se seción cuando haga clic en el Abatare.
  
  * Nos vamos al archivo de *general.js* y en la linea 38 se encuentra el fragmento del código.

  * Después noa vamos a la consola de firebase y en la *pestaña* de **Usuarios**. Borramos los usuarios que tengamos registrados.

  * Una vez terminado nos pasamos s la *pestaña* de **Pantillas** y en la opción de *Verificación de dirección de correo electrónico*, nos vamos al apartado de **Asunto** y lo personaliamos para nuestra app.

  Ejemplo:

  
 