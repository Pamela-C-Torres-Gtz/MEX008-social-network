CURSO DE FIREBASE PARA LA WEB
===============================

# Índice

* [1. Introducción](#1.-introducción)
   * >[1.1 ¿Qué es Firebase?](#1.1-¿qué-es-firebase?)
   * >[1.2 ¿Por qué utilizar Firebase?](#1.2-¿por-qué-utilizar-firebase?)
   * >[1.3 Integraciones](#1.3-integraciones)
   * >[1.4 Empresas que usan Firebas](#1.4-empresas-que-usan-Firebase)


* [2. Consola Web de Administración](#2.-consola-web-de-administración)
   * >[2.1 Consola de Administración](#2.1-consola-de-administración)
   * >[2.2 Configuración de Firebase en el proyecto](#2.2-configuración-de-firebase-en-el-proyecto)
 
 


 ## 1. Introducción

 ## *1.1 ¿Qué es Firebase?*

 Es una herramienta creada por Google Cloud que nos permite conectarnos desde cualquier aplicación a las tareas de backend y podemos deplegar nuestras aplicaciones mucho más simple.

Firebase nos permite Automatizar y agilizar distintas tanteras que vienen integradas en su plataforma como:

  * Crear y autenticar Usuarios.
  * Guardar información en B.D.
  * Almacenar archivos.
  * Administrar infra estructura.
  * Analizar métricas.

Los *Servicios de Firebase para la Web* son los siguientes;

   * **Cloud Firestore:** Almacenamiento y sincronización de los datos de nuestra aplicación a escala global, funciona como una base de datos NoSQL.

   * **Autenticación:** Autenticación de usuarios de manera simple, rápida y segura con email y contraseña, redes sociales o mensajes de texto.

   * **Cloud Storage:** Almacenar y atender nuestros archivos (imágenes, vídeos, etc) a la escala de Google.

   * **Cloud Messaging:** Envío de mensajes y notificaciones segmentadas.

   * **Hosting:** El sistema de Google Cloud para almacenar la información de nuestra página web.

   * **Cloud Functions:** Administración del código de backend necesario para desplegar nuestras aplicaciones a los servidores de Google Cloud.

   * **Integraciones:** Podemos conectar las funciones de Firebase a otros servicios de Google (Google Ads, Google Marketing Platform, entre otras) o incluso a servicios de terceros como Slack, Data Studio y BigQuery.

## *1.2 ¿Por qué utilizar Firebase?*

Porque nos permite construir app para android, iOs y Web con servicios que nos permiten administrar la infraestructura.

Porque contamos con todo el soporte de Google ya que esta hecho con su infra estructura.

Podemos construir mejores aplicaciones, con servicios con B.D., pero de manera un poco más sencillo que el backend tradicional.

Tambien nos brinda servicios para mejorar la calidad de la aplicaciones, y nos indica como se comporta a nivel de rendimiento nuestras app, asi como errores, almacenamiento de memoria, etc.

Tambien nos brinda servicios para el Crecmiento de nuestro negocio o app, como el servicio de Metricas *(Nos sirven para medir ¿que estan haciendo nuestros usuarios?, ¿Como lo hacen?)*. Esto nos ayuda a la mejora continua de nuestras app's.

## *1.3 Integraciones*

Estas pueden ser con Google o con terceros, que nos ayudan a crecer y mejorar nuestra app. Algunas de esas integraciones son:

  * Google Ads
  * AdMob
  * Google Marqueking Plataform
  * Play Store
  * Data Studio
  * BigQuery
  * Slack

  ## *1.4 Empresas que usan Firebase*

  Son empresas que conocemos y usamos su aplicacion casi todos los días, como:

  * duolingo.
  * shazam.
  * venmo.
  * Ctrip.
  * trivago.
  * lyft
  * wattpad.

Firebase cuenta con dos modalidades, podemos empezar con con la mayoria de los servecios gratuitos y conforme va aumentando nuestro crecimiento, puede generar algunos costos.

******

## 2 Consola Web de Adminsitración


## *2.1 Consola de Administración*

Esta seccion nos sirve para configurar servicios web y todo lo necesario para trabajar con el desarrollo de nuestra webapp.

En la **Pestaña de General** nos aparecen los siguientes campos:

 * *Tu Proyecto* en esta sección nos aparecen los datos basicos que se generan al crear nuestro poryecto como lo son: 
  
   * | **Nombre del proyecto**
   * | **ID del producto**
   * | **Clave de la API web** 

* *Configuración pública*  en esta seeción nos aparecen:

   * | **Nombre del proyecto pero para el público**
   * | **correo electrónico**

En la **Pestaña de Mensajeria en la nube** nos permite información importante para que en nuestro proyecto usemos las notificaiones.

Nos da:

  | **Clave del servidor:** que usamos en nuestro backend, cuando necesitamos enviar una notificación o mensaje a nuestros clientes. tambien debe de estar muy bien protegida.

  | **Certificados push web:** es como la llave pública que se coloca a nuestras aplicaciones y le indica a firebase que si puede consimir *N* servicios.

En la **Pestaña de Integraciones** nos permite añadir las integraciones que se mencionarión anteriormente.

En la **Pestaña de Cuentas de Servicio** firebase tambien se puede usar en Back-end, nos brinda las llaves *JSON*, que se colocan en nuestro back-end para utilizar los servicios.

y nos muestra Fragmento de **configuración de Admin SDK** para Node.js, Java, Python, Go, que son las más comunes. Pero es importante mencionar que la comunidad *.Net* esta desarrollando **SDK** para Firebase.

En la **Pestaña de Usuarios y permisos** aqui podemos añadir a los miembros que pueden acceder a los servicios del proyecto de las funcionalides del proyecto.


## *2.2 Configuración de Firebase en el proyecto*

Lo primero que debemos añadir para crear nuestros proyectos son los archivos de Firebase, uno con el código base de la librería y otro para cada servicio que utilizamos en nuestra aplicación. Gracias a esta división nuestra aplicación puede cargar menos archivos y funcionar mucho más rápido.

**NOTA:** *Firebase cuenta con una amplia documentación que es muy clara y estan realizando cambios constante, se tiene que estar rebisando.*

* 1. creamos nuestro boilerplay.

* 2. Nos vamos a nuestra consola de firebase.

  * 2.1 En la pestaña *General*, buscamos **Firebase SDK snippet** y seleccionamos la opc. *CDN*.

  * 2.2 En la parte de **Documentación** podemos visualizar todos los requerimientos y pasos necesarios para la *Configuración de nuestro Proyecto*.

       * 2.2.1 Podemos visualizar como agregar el *skrip* que necesitamos para habilitar los servicios de firebase.

       * 2.2.2 Tambien nos muestra una lista de los scrips que necesitaremos para cada uno de los servicios.

* 3. En nuestra carpeta de js, creamos otra carpeta donde almacenaremos la configuración  de Firebase llamada **config**.
 
   * 3.1 En la carpets de *config* crear un archivo JS llamado **ConfigFirebase.js** y pegamos las credencias de configuración.

* 4. Despúes nos pasmos a nuestro archivo *index.html* que se encuentra en nuestra carpeta de **src**. y despues del ``<body>`` agremanos el escrip que necesitaremos para la configuración;  ``<script type="text/javascript" src="js/config/ConfigFirebase.js"></script>``.  Y se coloca en primer lugar.

* 5. Abrimos nuestro archivo *general.js* que se encuentra en la carpeta de **js**, y pegamos la instrucción para que se inicialice Firebase  
``// Init Firebase nuevamente``
 `` firebase.initializeApp(firebaseConfig);``