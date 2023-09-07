# lovelace-frontend

## Descripción

lovelace-frontend es una aplicacion frontend es una aplicacion que que permite la generacion de imágenes utilizando la API de DALL-E desarrollada por OpenAI.

**Importante**: En la actualidad, la API de OpenAI requiere un pago para su uso. Si el pago no se realiza, la aplicación no funcionará correctamente.

El backend se puede descargar aqui: [lovelace-backend](https://github.com/HamidGX/lovelace-backend)

## Requisitos

1. **Node.js**: La plataforma de ejecución de JavaScript en la que se basa React. Puedes descargar Node.js desde [nodejs.org](https://nodejs.org/).

2. **NPM**: Un administrador de paquetes ampliamente utilizado que es útil para gestionar las dependencias de tu proyecto. Puedes obtener npm como parte de [Node.js](https://nodejs.org/), que es una plataforma completa de desarrollo de JavaScript.

## Instrucciones de instalación

Para comenzar a trabajar en este proyecto, sigue los siguientes pasos:

1. Clona este repositorio en tu máquina local.

## Instrucciones de uso

Este proyecto utiliza scripts npm para la gestión de tareas comunes. A continuación, se muestran los comandos disponibles:

- `npm install`: Inicia la aplicación en modo de desarrollo.
- `npm run dev`: Inicia la aplicación en modo de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm start`: Inicia la aplicación en modo de producción.

## Dependencias y devDependencies

Estas son las dependencias y devDependencies utilizadas en el proyecto "Azulgrana" junto con sus respectivas versiones:

- **Dependencias:**

  - `flowbite`: 1.6.3
  - `flowbite-react`: 0.3.8
  - `formik`: 2.2.9
  - `react`: 18.2.0
  - `react-dom`: 18.2.0
  - `react-router-dom`: 6.8.0
  - `react-toastify`: 9.1.2

- **devDependencies:**

  - `@types/react`: 18.0.27
  - `@types/react-dom`: 18.0.10
  - `@vitejs/plugin-react`: 3.1.0
  - `autoprefixer`: 10.4.13
  - `postcss`: 8.4.21
  - `tailwindcss`: 3.2.4
  - `vite`: 4.1.0

## Configuración API

Para que la aplicación funcione correctamente, necesitas descargar el backend.
El backend se puede descargar aqui: [lovelace-backend](https://github.com/HamidGX/lovelace-backend)

## Variables de entorno

Para configurar las variables de entorno necesarias para el funcionamiento de Azulgrana, sigue estos pasos:

1. En la **raíz** del proyecto, crea un archivo llamado `.env.local` y `.env.production`

2. Abre el archivo `.env.local` y `.env.production` despues define las variables de entorno necesarias siguiendo este formato:

```javascript
//env.local
VITE_API_POST_URL = 'http://localhost:8080/api/v1/post'
VITE_API_DALLE_URL = 'http://localhost:8080/api/v1/dalle'
```

```javascript
//env.production
VITE_API_POST_URL = 'https://api-example.com/post'
VITE_API_DALLE_URL = 'https://api-example.com/dalle'
```

## Vista previa

|                    Inicio                    |
| :------------------------------------------: |
| ![Imagen 1](https://i.imgur.com/6Y78FyC.jpg) |
|                  **About**                   |
| ![Imagen 2](https://i.imgur.com/5HgiAAA.jpg) |
|                **Comunidad**                 |
| ![Imagen 1](https://i.imgur.com/ZK2XuGS.jpg) |
|                  **Crear**                   |
| ![Imagen 2](https://i.imgur.com/IufKcpx.jpg) |

## Autor

- **Hamid Escalera**: Trabajo Inicial & Documentación.

---

Desarrollado por [HamidGX](https://github.com/HamidGX) 🌌
