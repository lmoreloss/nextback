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

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArQAAAA+CAYAAADaiohNAAAW+3RFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBhZ2VudCUzRCUyMk1vemlsbGElMkY1LjAlMjAoV2luZG93cyUyME5UJTIwMTAuMCUzQiUyMFdpbjY0JTNCJTIweDY0KSUyMEFwcGxlV2ViS2l0JTJGNTM3LjM2JTIwKEtIVE1MJTJDJTIwbGlrZSUyMEdlY2tvKSUyMENocm9tZSUyRjE0My4wLjAuMCUyMFNhZmFyaSUyRjUzNy4zNiUyMiUyMHZlcnNpb24lM0QlMjIyOS4yLjklMjIlMjBzY2FsZSUzRCUyMjElMjIlMjBib3JkZXIlM0QlMjIwJTIyJTNFJTBBJTIwJTIwJTNDZGlhZ3JhbSUyMG5hbWUlM0QlMjJQJUMzJUExZ2luYS0xJTIyJTIwaWQlM0QlMjJfVkt5RWZkSGVQNnhIUUJHZkZ3eiUyMiUzRSUwQSUyMCUyMCUyMCUyMCUzQ214R3JhcGhNb2RlbCUyMGR4JTNEJTIyNzE5JTIyJTIwZHklM0QlMjIzODglMjIlMjBncmlkJTNEJTIyMSUyMiUyMGdyaWRTaXplJTNEJTIyMTAlMjIlMjBndWlkZXMlM0QlMjIxJTIyJTIwdG9vbHRpcHMlM0QlMjIxJTIyJTIwY29ubmVjdCUzRCUyMjElMjIlMjBhcnJvd3MlM0QlMjIxJTIyJTIwZm9sZCUzRCUyMjElMjIlMjBwYWdlJTNEJTIyMSUyMiUyMHBhZ2VTY2FsZSUzRCUyMjElMjIlMjBwYWdlV2lkdGglM0QlMjI4MjclMjIlMjBwYWdlSGVpZ2h0JTNEJTIyMTE2OSUyMiUyMG1hdGglM0QlMjIwJTIyJTIwc2hhZG93JTNEJTIyMCUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUzQ3Jvb3QlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteENlbGwlMjBpZCUzRCUyMjAlMjIlMjAlMkYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteENlbGwlMjBpZCUzRCUyMjElMjIlMjBwYXJlbnQlM0QlMjIwJTIyJTIwJTJGJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhDZWxsJTIwaWQlM0QlMjJVdlpocjVrNEFSYVFkQkJUbnpJTS0xJTIyJTIwcGFyZW50JTNEJTIyMSUyMiUyMHN0eWxlJTNEJTIycm91bmRlZCUzRDElM0J3aGl0ZVNwYWNlJTNEd3JhcCUzQmh0bWwlM0QxJTNCJTIyJTIwdmFsdWUlM0QlMjJWaXN0YSUyMHVzdWFyaW8lMjIlMjB2ZXJ0ZXglM0QlMjIxJTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhHZW9tZXRyeSUyMGhlaWdodCUzRCUyMjYwJTIyJTIwd2lkdGglM0QlMjIxMjAlMjIlMjB4JTNEJTIyOTAlMjIlMjB5JTNEJTIyMjEwJTIyJTIwYXMlM0QlMjJnZW9tZXRyeSUyMiUyMCUyRiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQyUyRm14Q2VsbCUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214Q2VsbCUyMGlkJTNEJTIyVXZaaHI1azRBUmFRZEJCVG56SU0tMyUyMiUyMGVkZ2UlM0QlMjIxJTIyJTIwcGFyZW50JTNEJTIyMSUyMiUyMHNvdXJjZSUzRCUyMlV2WmhyNWs0QVJhUWRCQlRueklNLTIlMjIlMjBzdHlsZSUzRCUyMmVkZ2VTdHlsZSUzRG9ydGhvZ29uYWxFZGdlU3R5bGUlM0Jyb3VuZGVkJTNEMCUzQm9ydGhvZ29uYWxMb29wJTNEMSUzQmpldHR5U2l6ZSUzRGF1dG8lM0JodG1sJTNEMSUzQmV4aXRYJTNEMCUzQmV4aXRZJTNEMC41JTNCZXhpdER4JTNEMCUzQmV4aXREeSUzRDAlM0JlbnRyeVglM0QxJTNCZW50cnlZJTNEMC41JTNCZW50cnlEeCUzRDAlM0JlbnRyeUR5JTNEMCUzQiUyMiUyMHRhcmdldCUzRCUyMlV2WmhyNWs0QVJhUWRCQlRueklNLTElMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteEdlb21ldHJ5JTIwcmVsYXRpdmUlM0QlMjIxJTIyJTIwYXMlM0QlMjJnZW9tZXRyeSUyMiUyMCUyRiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQyUyRm14Q2VsbCUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214Q2VsbCUyMGlkJTNEJTIyVXZaaHI1azRBUmFRZEJCVG56SU0tNCUyMiUyMGNvbm5lY3RhYmxlJTNEJTIyMCUyMiUyMHBhcmVudCUzRCUyMlV2WmhyNWs0QVJhUWRCQlRueklNLTMlMjIlMjBzdHlsZSUzRCUyMmVkZ2VMYWJlbCUzQmh0bWwlM0QxJTNCYWxpZ24lM0RjZW50ZXIlM0J2ZXJ0aWNhbEFsaWduJTNEbWlkZGxlJTNCcmVzaXphYmxlJTNEMCUzQnBvaW50cyUzRCU1QiU1RCUzQiUyMiUyMHZhbHVlJTNEJTIyUHVlcnRvJTIwNzUwMCUyMiUyMHZlcnRleCUzRCUyMjElMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteEdlb21ldHJ5JTIwcmVsYXRpdmUlM0QlMjIxJTIyJTIweCUzRCUyMjAuMDA3MSUyMiUyMHklM0QlMjIyJTIyJTIwYXMlM0QlMjJnZW9tZXRyeSUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214UG9pbnQlMjBhcyUzRCUyMm9mZnNldCUyMiUyMCUyRiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQyUyRm14R2VvbWV0cnklM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZteENlbGwlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteENlbGwlMjBpZCUzRCUyMlV2WmhyNWs0QVJhUWRCQlRueklNLTclMjIlMjBlZGdlJTNEJTIyMSUyMiUyMHBhcmVudCUzRCUyMjElMjIlMjBzb3VyY2UlM0QlMjJVdlpocjVrNEFSYVFkQkJUbnpJTS0yJTIyJTIwc3R5bGUlM0QlMjJlZGdlU3R5bGUlM0RvcnRob2dvbmFsRWRnZVN0eWxlJTNCcm91bmRlZCUzRDAlM0JvcnRob2dvbmFsTG9vcCUzRDElM0JqZXR0eVNpemUlM0RhdXRvJTNCaHRtbCUzRDElM0JleGl0WCUzRDElM0JleGl0WSUzRDAuNSUzQmV4aXREeCUzRDAlM0JleGl0RHklM0QwJTNCc3RhcnRBcnJvdyUzRGNsYXNzaWMlM0JzdGFydEZpbGwlM0QxJTNCJTIyJTIwdGFyZ2V0JTNEJTIyVXZaaHI1azRBUmFRZEJCVG56SU0tNSUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214R2VvbWV0cnklMjByZWxhdGl2ZSUzRCUyMjElMjIlMjBhcyUzRCUyMmdlb21ldHJ5JTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDQXJyYXklMjBhcyUzRCUyMnBvaW50cyUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214UG9pbnQlMjB4JTNEJTIyNDYwJTIyJTIweSUzRCUyMjI0MCUyMiUyMCUyRiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214UG9pbnQlMjB4JTNEJTIyNDYwJTIyJTIweSUzRCUyMjI0MCUyMiUyMCUyRiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQyUyRkFycmF5JTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGbXhHZW9tZXRyeSUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQyUyRm14Q2VsbCUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214Q2VsbCUyMGlkJTNEJTIyVXZaaHI1azRBUmFRZEJCVG56SU0tOSUyMiUyMGNvbm5lY3RhYmxlJTNEJTIyMCUyMiUyMHBhcmVudCUzRCUyMlV2WmhyNWs0QVJhUWRCQlRueklNLTclMjIlMjBzdHlsZSUzRCUyMmVkZ2VMYWJlbCUzQmh0bWwlM0QxJTNCYWxpZ24lM0RjZW50ZXIlM0J2ZXJ0aWNhbEFsaWduJTNEbWlkZGxlJTNCcmVzaXphYmxlJTNEMCUzQnBvaW50cyUzRCU1QiU1RCUzQiUyMiUyMHZhbHVlJTNEJTIyUHVlcnRvJTIwMTMzNyUyMiUyMHZlcnRleCUzRCUyMjElMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteEdlb21ldHJ5JTIwcmVsYXRpdmUlM0QlMjIxJTIyJTIweCUzRCUyMi0wLjA5MjYlMjIlMjB5JTNEJTIyMSUyMiUyMGFzJTNEJTIyZ2VvbWV0cnklMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteFBvaW50JTIweCUzRCUyMjEwJTIyJTIweSUzRCUyMjElMjIlMjBhcyUzRCUyMm9mZnNldCUyMiUyMCUyRiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQyUyRm14R2VvbWV0cnklM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZteENlbGwlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteENlbGwlMjBpZCUzRCUyMlV2WmhyNWs0QVJhUWRCQlRueklNLTIlMjIlMjBwYXJlbnQlM0QlMjIxJTIyJTIwc3R5bGUlM0QlMjJyb3VuZGVkJTNEMSUzQndoaXRlU3BhY2UlM0R3cmFwJTNCaHRtbCUzRDElM0IlMjIlMjB2YWx1ZSUzRCUyMk5leHQuanMlMjIlMjB2ZXJ0ZXglM0QlMjIxJTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhHZW9tZXRyeSUyMGhlaWdodCUzRCUyMjYwJTIyJTIwd2lkdGglM0QlMjIxMjAlMjIlMjB4JTNEJTIyMzAwJTIyJTIweSUzRCUyMjIxMCUyMiUyMGFzJTNEJTIyZ2VvbWV0cnklMjIlMjAlMkYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZteENlbGwlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteENlbGwlMjBpZCUzRCUyMlV2WmhyNWs0QVJhUWRCQlRueklNLTUlMjIlMjBwYXJlbnQlM0QlMjIxJTIyJTIwc3R5bGUlM0QlMjJyb3VuZGVkJTNEMSUzQndoaXRlU3BhY2UlM0R3cmFwJTNCaHRtbCUzRDElM0IlMjIlMjB2YWx1ZSUzRCUyMlN0cmFwaSUyMiUyMHZlcnRleCUzRCUyMjElMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteEdlb21ldHJ5JTIwaGVpZ2h0JTNEJTIyNjAlMjIlMjB3aWR0aCUzRCUyMjEyMCUyMiUyMHglM0QlMjI1MzAlMjIlMjB5JTNEJTIyMjEwJTIyJTIwYXMlM0QlMjJnZW9tZXRyeSUyMiUyMCUyRiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQyUyRm14Q2VsbCUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214Q2VsbCUyMGlkJTNEJTIyVXZaaHI1azRBUmFRZEJCVG56SU0tMTAlMjIlMjBwYXJlbnQlM0QlMjIxJTIyJTIwc3R5bGUlM0QlMjJzdHJva2VXaWR0aCUzRDIlM0JodG1sJTNEMSUzQnNoYXBlJTNEbXhncmFwaC5mbG93Y2hhcnQuZGF0YWJhc2UlM0J3aGl0ZVNwYWNlJTNEd3JhcCUzQiUyMiUyMHZhbHVlJTNEJTIyTXlTUUwlMjIlMjB2ZXJ0ZXglM0QlMjIxJTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhHZW9tZXRyeSUyMGhlaWdodCUzRCUyMjYwJTIyJTIwd2lkdGglM0QlMjI2MCUyMiUyMHglM0QlMjI3MjAlMjIlMjB5JTNEJTIyMjEwJTIyJTIwYXMlM0QlMjJnZW9tZXRyeSUyMiUyMCUyRiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQyUyRm14Q2VsbCUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214Q2VsbCUyMGlkJTNEJTIyVXZaaHI1azRBUmFRZEJCVG56SU0tMTElMjIlMjBlZGdlJTNEJTIyMSUyMiUyMHBhcmVudCUzRCUyMjElMjIlMjBzb3VyY2UlM0QlMjJVdlpocjVrNEFSYVFkQkJUbnpJTS01JTIyJTIwc3R5bGUlM0QlMjJlZGdlU3R5bGUlM0RvcnRob2dvbmFsRWRnZVN0eWxlJTNCcm91bmRlZCUzRDAl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)

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
