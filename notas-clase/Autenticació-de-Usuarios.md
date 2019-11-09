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
