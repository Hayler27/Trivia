# Trivia App

Este proyecto es una aplicación de trivia que presenta al usuario una serie de preguntas de opción múltiple y muestra los resultados al finalizar el cuestionario.

## Funcionalidades

- Presenta al usuario 10 preguntas de verdadero o falso.
- Registra las respuestas del usuario y calcula su puntuación.
- Muestra los resultados al finalizar el cuestionario.
- Permite al usuario volver a jugar después de ver los resultados.

## Cómo usar

1. Clona este repositorio en tu máquina local.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm start` para iniciar la aplicación en un emulador o dispositivo móvil.

## Estructura del proyecto

El proyecto está organizado de la siguiente manera:

- `screens/`: Contiene los componentes de las diferentes pantallas de la aplicación.
- `styles/`: Contiene los estilos CSS para los componentes.
- `App.js`: Punto de entrada de la aplicación donde se configuran las rutas de navegación.
- `package.json`: Archivo de configuración de Node.js que lista las dependencias del proyecto.
- `README.md`: Documentación del proyecto.

## Tecnologías utilizadas

- React Native
- React Navigation

## Pruebas

Se han incorporado pruebas automatizadas para garantizar el correcto funcionamiento de la aplicación. 

### Ejecutar pruebas

Para ejecutar las pruebas, sigue estos pasos:

1. Abre una terminal en el directorio del proyecto.
2. Ejecuta `npm test` para ejecutar todas las pruebas.

### Pruebas en entorno web

También puedes probar la aplicación en un entorno web utilizando el siguiente comando:

1. expo start --web

## Configuraciones para pruebas

Se realizaron las siguientes configuraciones para agregar las pruebas:

- Se utilizaron las bibliotecas Jest y React Testing Library para escribir y ejecutar pruebas.
- Se crearon pruebas para cada componente de la aplicación para verificar su funcionalidad y renderizado adecuado.
