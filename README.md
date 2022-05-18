# MyMovies app

## Technologies
- [React Native](https://reactnative.dev/): Version 0.63.4

- [React](https://reactjs.org/): Version 16.13.1

- [Javascript](https://www.javascript.com/)

- [Java Android](https://developer.android.com/)

## Entorno de desarrollo:
1. Descargar e instalar las siguientes dependencias: -[NodeJS](https://nodejs.org/en/download/). -[JDK](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html). -[Android-Studio](https://developer.android.com/studio).

2. Configurar entornos de desarrollo: [Configuración de entorno](https://reactnative.dev/docs/environment-setup).

## Instalación de paquetes:
Para instalar las librerías abre una consola en la raíz del proyecto que utilice el manejador de paquetes de node "npm" y digita en la consola: `npm install`

## Ejecutando la aplicación:
En una terminal digita el siguiente comando: `npm run android`
> El comando utilizado es un acortado del comando oficial utilizado en la documentación de react native cli: `react-native run-android`, si no instalaste esta herramienta de forma global se puede utilizar desde la carpet "node_modules" anteponiendo el comando npx: `npx react-native run-android`.

# Instrucciones de como correr:

Si se desea correr solo es necesario las siguientes instrucciones:

### Para ejecutar los comandos
- Terminal (Linux)
- Powershell/CMD (Windows)

### La app se probo con las siguientes condiciones :

- Android Studio Bumblebee | 2021.1.1 Patch 2
- Node.js v16.14.2. 
- Java JDK 1.8.0_321-b07

# 1. Instalar paquetes de Node

Primero instalar paquetes de node 
```
npm install
```
# 2 Dispositivo Fisico (omitir este paso si se correra en emulador)

1. Descargar e instalar Android Studio.
2. Ir alas configuraciones de Android Studio 
3. Se debe instalar ***Google USB Driver*** En Appearance & Behavior > System Settings > Android SDK > SDK Tools >Google USB Driver

- Ahora que tenemos los drivers corremos el comando 

```
npx react-native run-android
```

# Errores en listen 

Si da error el puerto porque esta ocupado puedes utilizar :
```
netstat -ano | findstr :<PORT>

taskkill /PID <PID> /F      
```

# Archivos que pueden dar error:

# local.properties

Si no se genera el archivo dentro de /android/

crearlo y dentro poner:
```
sdk.dir=C:\\Users\\<userName>\\AppData\\Local\\Android\\Sdk
```
