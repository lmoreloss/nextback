# Tabla de contenido

[Objetivo](#objetivo)

[Problematica](#la-problematica)

[Solucion](#la-solucion)

[Herramientas usadas](#herramientas-usadas)

[Prerequisitos](#prerequisitos)

[Diagrama de conexiones](#diagrama-de-conexiones)

[Desarrollo Backend](#como-usarlo-desarrollo-backend)

[Desarrollo Frontend](#como-usarlo-desarrollo-frontend)

[Como enviar al servidor](#como-enviar-al-servidor)

[Configuracion del servidor](#configuracion-del-servidor)

# Objetivo

Este documento es para, valga la redundancia, documentar el
proceso de desarrollo e implementación de las tecnologías que se usaron en la
creación de la nueva pagina web.

Debido a los requisitos de la pagina, se requieren tecnologías
de distintas fuentes y funcionalidades que la pagina actual no posee. Esto
ayudara a darle un “look and feel” mas moderno a la pagina web, ayudar a
posicionar mejor en el SEO en relación al nicho de Digital Solution.

# La problemática

Para hacer cambios en la pagina actual, al ser una pagina
estatica, se necesita editar el código fuente de la misma.

Al tomar ejemplos de otras paginas se identificaron posibles
mejoras a la pagina actual, desde hacerla ver dinámica, contar una historia con
la pagina y hacerla visualmente atractiva.

# La solución

Al cambiar las tecnologías usadas por una pagina dinámica mediante
API’s, se soluciona el problema de mantener y alimentar la pagina. Claro, esto
conlleva que alguien debe encargarse de alimentarla.

Esto aumenta la interacción del usuario con la pagina, lo
cual incrementa las oportunidades de venta, ya sea de pantallas, consultoría, instalación
o desarrollo.

De igual forma es importante no perder la captación de
mercado de los dispositivos móviles, los cuales representan alrededor del 63%
mundialmente. Esto involucra hacer que la pagina se muestre “bien” tanto en móviles
como en computadoras de escritorio o laptops.

# Herramientas usadas

| Herramienta | Version |
| --- | --- |
| NPM | 11.4 |
| React | 19.2 |
| Strapi | 5.31 |
| React Three Fiber (R3F) | 9.4 |
| GSAP | 3.13 |
| Next.js | 16.0 |
| MySQL | 8.0 |
| Git | 2.51 |

## NPM

La base de todo el proyecto es NPM, el cual permite la instalación
de dependencias para las distintas partes de la pagina.

## React y Next.js

Al momento de iniciar este proyecto se usó la versión mas
reciente de Next.js, la cual es un framework de React para el desarrollo
frontend, delegándole partes de la renderización del sitio web al servidor.

## Strapi

Para el backend del proyecto, Strapi es la solución que
permite añadir, eliminar y modificar entradas, ya sean entradas de blog, imágenes,
videos, sin necesidad de modificar el código de la pagina, haciendo que sea mas
sencillo alimentar y actualizar la pagina

## React Three Fiber (R3F)

Para usar modelos 3D en la pagina se necesita una librería 3D
que permita cargar modelos, texturizarlos y cambiar sus Transforms (Posicion,
escala y rotación). R3F es la implementación de Three.js para React

## GSAP

Green Sock Animation Platform es una librería sin
dependencia de framework, permitiendo animar casi cualquier propiedad o
variable que se encuentre en el documento, desde algo simple como la opacidad y
posiciones de un div hasta modificar los Transforms de los objetos 3D

## MySQL

MySQL es soportado por Strapi y por el servidor, combinado con su eficiencia permite que sea una opcion adecuada para el proyecto

# Prerequisitos

Para darle mantenimiento o seguir con el desarrollo de este proyecto es necesario tener conocimientos previos en React, asi como instalar lo siguiente

| Herramienta | Version mínima |
| --- | --- |
| Node.js | 24.3 |
| MySQL | 8.0 |
| Git | 2.51 |

Esto permitira clonar los repositorios, instalar las dependencias del proyecto y que Strapi se pueda conectar a la base de datos para las imagenes y entradas de blog.

**Es importante contar con dos subdominios con configuraciones DNS que apunten a la misma direccion IP del servidor**

# Diagrama de conexiones

<img width="692" height="62" alt="descarga" src="https://github.com/user-attachments/assets/f8817069-ac6b-453e-8f44-b44e20d330e6" />


Tanto Next.js como Strapi permiten cambiar los puertos de sus conexiones necesarias. En este caso, el puerto default de Next.js es el 3000, el cual ya se encuentra ocupado en Digital, por lo que se cambio el puerto al 7500.

# Como usarlo (Desarrollo Backend)

Una vez que se tengan los archivos del backend (Strapi) en la
maquina donde se vaya a desarrollar, es importante abrir una línea de comandos
y navegar hasta la ruta base del proyecto de Strapi usando el siguiente comando

```shell
cd backend/server
```

y luego ejecutar el comando para instalar las dependencias de NPM

```shell
npm install
```

Dichas dependencias se encuentran en `/backend/server/package.json`

Dentro del proyecto de Strapi, en la ruta `/backend/server/src/admin/App.tsx` se modifica la vista principal del panel decontrol de Strapi, ya sea cambiar colores, añadir traducciones o añadir elementos a la barra lateral para extender la funcionalidad de Strapi con el siguiente ejemplo de codigo

```jsx
import Logo from "./extensions/digisols.png";
import Favicon from "./extensions/digisols.png";
import { StrapiIcon } from "@strapi/icons";


export default {
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to My Custom Dashboard",
        "Auth.form.welcome.subtitle": "Log in to manage your content",
        "app.components.LeftMenu.navbrand.title": "My Company Name",
      },
      es: {
        "Auth.form.welcome.title": "Bienvenido al Panel",
        "Auth.form.welcome.subtitle": "Inicia sesion para editar el contenido",
        "app.components.LeftMenu.navbrand.title": "Digital Solution",
      },
    },
    theme: {
      light: {
        colors: {
          primary100: "#f6ecfc",
          primary200: "#e0c1f4",
          primary500: "#ac73e6",
          primary600: "#9736e8",
          primary700: "#8312d1",
          danger700: "#b72b1a",
        },
  },
}



bootstrap(app: StrapiApp){
    app.addMenuLink({
      to: "/ruta",
      icon: StrapiIcon,
      intlLabel: {
        id: "idParaIdentificar",
        defaultMessage: "Tooltip que se muestra al hacer hover",
      },
      //El component a renderizar debe ser puesto como async y tenerlo en otro archivo
      Component: async () => import("./extensions/componente"),
      permissions: [],
    });
}
```

Todo lo que se desee usar para extender las funcionalidades de Strapi (ya sean components, scripts, imagenes videos, etc.) debe ser colocado en la carpeta `extensions`, dentro de la ruta `/backend/server/src/admin/extensions`

Los componentes que se pueden añadir son componentes basados en React

Para ejecutar el servidor backend en modo desarrollo lo unico que se necesita hacer, despues de instalar las dependencias con `npm install` es ejecutar el comando

```shell
npm run dev
```

Para hacer que Strapi se conecte a otra base de datos, es necesario editar el archivo .env dentro de `/backend/server/.env`

```.env
# Server
HOST=0.0.0.0
PORT=1337

# Database
DATABASE_CLIENT=mysql
DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_NAME=NombreDeLaBase
DATABASE_USERNAME=NombreDeUsuario
DATABASE_PASSWORD=PasswordDeUsuario
DATABASE_SSL=false
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=ZCxHLVgN0XWEWqfTtScesQ==
```

# Como usarlo (Desarrollo Frontend)

Cuando se tengan los archivos de frontend necesarios del frontend (Next.js) en la
maquina donde se vaya a desarrollar, es importante abrir una línea de comandos
y navegar hasta la ruta base del proyecto de Strapi usando el siguiente comando

```shell
cd frontend/next-js-project
```

y luego ejecutar el comando para instalar las dependencias de NPM

```shell
npm install
```

Dichas dependencias se encuentran en `/frontend/next-js-project/package.json`

De igual forma, para definir en que puerto corre Next.js (En este caso el 7500), es necesario editar el archivo `/frontend/next-js-project/package.json` y editar las lineas siguientes

```json
"scripts": {
    "dev": "next dev -p 7500", //Se añade la opcion -p 7500
    "build": "next build",
    "start": "next start  -p 7500" //Se añade la opcion -p 7500
  },
```

Dentro de `/frontend/next-js-project/src/app/page.tsx` es donde se edita la pagina inicial, ya sea para editar el movimiento del logo en 3D, el fondo o la distribucion general de la pagina.

Cabe aclarar que el archivo de la pagina actualmente hace una peticion a Strapi para recuperar todo el catalogo de entradas. Ese comportamiento se puede modificar.

El codgo de la pagina contiene la siguiente Interface, la cual permite que los Articles recuperados desde Strapi (basicamente las entradas de blog) se muestren

```jsx
export interface Article {
  id: string;
  title: string;
  cover: any;
  description: string;
  publishedAt: Date;
  TextoMarkdown: string;
  slug: string;
  summary: string;
}
```

El codigo responsable de hacer las peticiones es

```jsx
const getArticles = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*`);
    const data = await response.json();
    setArticles(data.data);
  };
```

Para que las animaciones de la pagina sirvan es necesario "registrar" GSAP y los plugins que usa con

```jsx
gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger, MorphSVGPlugin);
```

Actualmente el sitio web permite mostrar las entradas de blog, cuya pagina se encuentra dentro de la ruta `/frontend/next-js-project/src/app/blog/[slug]/page.tsx` siendo [slug] una carpeta especifica la cual toma el slug de la entrada de blog y genera la URL automaticamente con el slug otorgado

Todos los assets dentro de la ruta `/frontend/next-js-project/public` es globalmente accesible para todo el frontend. Aqui es donde las texturas y los modelos deben ubicarse

GSAP por su parte tiene varias funciones, para ver la documentacion sobre GSAP es recomendable revisar su [Documentacion](https://gsap.com/docs/v3). Sin embargo, las principales funciones que se usan es `gsap.to` y `timeline.to`

Una vez que se este listo, es cuestion de usar el siguiente comando para ejecutar el servidor local.

En la ruta `/frontend/next-js-project/next.config.ts` se cofiguran los hosts permitidos para cargar assets. Ya que Strapi corre en localhost (desde la vista de Next.js) se tiene que especificar en el archivo con el siguiente codigo, donde `/uploads/`es la carpeta default de Strapi donde carga todas las imagenes y videos que se le carguen al backend

```jsx
images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
```

En el archivo `/frontend/next-js-project/components/EjemploScroll.tsx` es donde se usa el modelo 3D. Se pueden cargar varios modelos en una misma pagina, usando la libreria de R3F

```jsx
import * as THREE from "three";
```

Luego, para cargar el modelo es con el siguiente codigo, el cual permite cargar un solo modelo o varios (con un arreglo), asi como las texturas (una sola o varias, con un arreglo)

```jsx
const [fbx, digisols, gondola, carro2] = useLoader(FBXLoader, [
    "/car_1.fbx",
    "/digisols.fbx",
    "/gondola.fbx",
    "/car_2.fbx",
  ]);
  let [texture1, texture2] = useLoader(THREE.TextureLoader, [
    "/Car Texture 1.png",
    "/Car Texture 2.png",
  ]);  ]);
```

Para preparar el modelo para mostrarlo, se necesita usar el siguiente codigo, usando las variables declaradas con `useLoader(FBXLoader, [])`. Cabe aclarar que R3F puede cargar `.fbx`, `.obj` y `.gtlf`

```jsx
const geo = useMemo(() => {
    let geom: THREE.BufferGeometry | undefined;
    fbx.traverse((item) => {
      if (item instanceof THREE.Mesh) {
        geom = item.geometry;
      }
    });
    return geom;
  }, [fbx]);
```

Y, para desplegar el modelo en la pagina, dentro de la parte HTML del script, es con el codigo a continuacion, opcionalmente usando referencias, texturas y rotaciones.

```jsx
           <mesh
            ref={geoRef}
            geometry={geo}
            scale={0.5}
            position={[-1, -0.5, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <meshPhysicalMaterial
              map={texture1}
              ref={matRef}
              transparent={true}
              wireframe={false}
            />
          </mesh>
```

### Importante

Las rotaciones en R3F son en radianes, por lo cual es necesario convertir grados a radianes con la formula

$$
Radianes = Grados \times \frac{\pi}{180}
$$

Sin embargo, se puede usar la funcion `convertirARadianes(grados: number)` para hacerlo de forma automatica

Cuando se tenga todo listo, se ejecuta el siguiente comando en una linea de comandos

```shell
npm run dev
```

Para configurar las variables de entorno de Next.js se edita el archivo `frontend/next-js-project/.env.local`, el cual contiene la IP del servidor backend (Strapi)

```.env
NEXT_PUBLIC_STRAPI_URL = "http://{IP DEL SERVIDOR}:1337"
```

# Como enviar al servidor

El servidor donde se va a ejecutar la pagina (tanto backend como frontend) necesita ser capaz de ejecutar comandos de NPM, de lo contrario no sera posible desplegar la pagina.

## Requisitos del servidor

| Hardware | Recommended | Minimum |
| --- | --- | --- |
| CPU | 2+ cores | 1 core |
| Memory | 4GB+ | 2GB |
| Disk | 32GB+ | 8GB |

| Database | Recommended | Minimum |
| --- | --- | --- |
| MySQL | 8.0 | 8.0 |
| MariaDB | 10.6 | 10.5 |
| PostgreSQL | 14.0 | 12.0 |
| SQLite | 3   | 3   |

| Operating System | Recommended | Minimum |
| --- | --- | --- |
| Ubuntu (LTS) | 24.04 | 20.04 |
| Debian | 11.x | 10.x |
| RHEL | 10.x | 8.x |
| macOS | 26.0 | 11.x |
| Windows Desktop | 11  | 10  |

Esto en adicion a que necesita ser capaz de ejecutar comandos en terminal, como npm, git, pm2, etc.

Una vez que se tenga el servidor, es necesario iniciar sesion, ya sea con ssh o fisicamente. Para esta documentacion se usa un VPS de Ionos, al cual se accede mediante SSH

```shell
ssh usuario@ipDelServidor
```

# Configuracion del servidor

El servidor necesita tener al menos 4GB de RAM (Fisicos o culquier combinacion de fisica con SWAP) y 2 vCores para que se puedan ejecutar los builds tanto de Strapi (Para el panel de administracion) y de Next.js (Para mostrar la pagina).

## Actualizacion del servidor

Para este paso se asume que se hizo `ssh` al servidor y esta con la sesion iniciada.

Para asegurarse que el servidor cuenta con el software mas reciente, es necesario usar el comando siguiente

```bash
apt update && apt upgrade -y
```

Este comando actualizara todo el software que viene preinstalado con Ubuntu Server.

## Instalacion de NPM

Debido a que npm no se encuentra en los repositorios por default de Ubuntu, es necesario añadir el repositorio propio de npm usando el comando

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
```

Una vez añadido, ejecutar el comando

```bash
apt install -y nodejs
```

## Instalacion de MySQL

Para instalar MySQL para la base de datos es necesario ejecutar el siguiente comando

```bash
apt install mysql-server -y
```

## Instalacion de Nginx

Nginx es necesario para el proxy reverso para redirigir las solicitudes http al puerto correcto. Se instala con

```bash
apt install nginx -y
```

## Instalacion de PM2

PM2 es necesario para, en caso que el servidor se reinicie, los procesos de Strapi y Next.js se inicien al iniciar el servidor. Se instala con

```bash
npm install -g pm2
```

## Configuracion de MySQL

Para configurar la base de datos que usara Strapi es necesario hacer unos coamndos en MySQL, por lo que se ejecutan los siguientes comandos **uno por uno**

```bash
mysql
```

```sql
CREATE DATABASE strapi_db;
CREATE USER 'strapi_user'@'localhost' IDENTIFIED BY 'contraseñaSegura';
GRANT ALL PRIVILEGES ON strapi_db.* TO 'strapi_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

## Configuracion, compilacion y ejecucion de Strapi

Dentro del servidor, en la carpeta `/var/www`, es clonar el repositorio de Strapi donde se tenga alojado con el siguiente comando, el cual clonara el repositorio remoto y lo pondra en la carpeta `backend`

```bash
git clone https://link-al.repo/repo.git backend
```

Luego navegar al nuevo directorio con el siguiente comando, asegurandose que se instalan los paquetes de npm

```bash
cd backend
npm install
```

Luego, usando nano, es necesario crear el archivo de variables de entorno con

```bash
nano .env
```

Y pegar la configuracion

```text
# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_KEYS=generarKeys
API_TOKEN_SALT=generarTokenSalt
ADMIN_JWT_SECRET=generarSecretJWT
TRANSFER_TOKEN_SALT=generarSaltToken
ENCRYPTION_KEY=generarKeyDeCifrao

# Database
DATABASE_CLIENT=mysql
DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_NAME=strapi_db
DATABASE_USERNAME=strapi_user
DATABASE_PASSWORD=contraseñaSegura
DATABASE_SSL=false
DATABASE_FILENAME=.tmp/data1.db
JWT_SECRET=ZCxHLVgN0XWEWqfTtScesQ==
```

Para guardar el archivo, es necesario presionar `Ctrl+O`, posteriormente `Enter` y finalmente `Ctrl+X` para salir de nano

Para compilar (hacer build) a Strapi, es necesario ejecutar el comando

```bash
npm run build
```

Este proceso puede tardar (o no), dependiendo de los recursos del servidor

Para empezar a ejecutar el build de Strapi, se ejecutar el comando

```bash
pm2 start npm --name "strapi-backend" -- run start
```

El cual corre npm de fondo y permite seguir usando el servidor. PM2 crea un "proceso" con el sombre `strapi-backend` para poder reiniciarlo, detenerlo, borrarlo, etc.

## Configuracion, compilacion y ejecucion de Next.js

Dentro del servidor, en la carpeta `/var/www`, es clonar el repositorio de Strapi donde se tenga alojado con el siguiente comando, el cual clonara el repositorio remoto y lo pondra en la carpeta `frontend`

```bash
git clone https://link-al.repo/repo.git frontend
```

Luego navegar al nuevo directorio con el siguiente comando, asegurandose que se instalan los paquetes de npm

```bash
cd frontend
npm install
```

Luego, usando nano, es necesario crear el archivo de variables de entorno con

```bash
nano .env.local
```

Dependiendo de la configuracion del servidor, la configuracion de la variables de entorno de Next.js puede ser alguna de las siguientes

```
NEXT_PUBLIC_STRAPI_URL = "http://127.0.0.1:1337"
```

```
NEXT_PUBLIC_STRAPI_URL = "http://ipDelServidor:1337"
```

Una vez que se tenga el archivo de variables de entorno, se necesita ejecutar el siguiente comando para compilar el proyecto de Next.js

```bash
npm run build
```

Y, finalmente para empezar a ejecutarlo y añadirlo a PM2, es necesario ejecutar PM2 de nuevo

```bash
pm2 start npm --name "nextjs-frontend" -- start
```

## Configurar PM2 para que inicie los procesos al reiniciar el servidor

Por default, PM2 elimina los procesos al reiniciar el servidor, por lo cual la lista de sus tareas se queda vacia al volver a encender el servidor.

Para evitar esto, se ejecutan los siguientes comandos, lo cual creara un archivo de arranque para PM2 y lo ejecutara al iniciar el sistema

```bash
pm2 startup
pm2 save
```

## Configurar Nginx

Nginx en este caso se usa como un servidor proxy inverso, enviando las solicitudes de conexion al puerto correcto, dependiendo del subdominio que se acceda.

Para cambiar la configuracion de Nginx, es necesario ejecutar el siguiente comando

```bash
nano /etc/nginx/sites-available/default
```

Y posteriormente borrar cualquier configuracion que se encuentre presente, luego pegar

```
# Frontend (Next.js)
server {
    listen 80;
    server_name subdominio1.direccionweb.com;

    location / {
        proxy_pass http://localhost:7500; #Este puerto apunta a Next.js
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Backend (Strapi)
server {
    listen 80;
    server_name subdominio2.direccionweb.com;

    location / {
        proxy_pass http://localhost:1337; #Este puerto apunta a Strapi
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Para comprobar la configuracion de Nginx, ejecutamos el comando `nginx -t` y si no hay errores, necesitamos reiniciar el servicio con `systemctl restart nginx` para que se apliquen los cambios
