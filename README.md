# ammper-app (belvo)

**Demo:** [https://ammper-app.netlify.app/](https://ammper-app.netlify.app/)

## Resumen

Este repositorio contiene el código para el proyecto ammper-app, desarrollado para la evaluación técnica de Belvo. El proyecto utiliza Next.js, SWR para la obtención de datos, TypeScript para tipado estático y Tailwind CSS para estilización junto con ui.shadcn. Cypress se utiliza para pruebas de extremo a extremo.

La aplicación está desplegada en Netlify y se puede acceder [aquí](https://ammper-app.netlify.app/).

## Empezando

Para ejecutar el servidor de desarrollo, utiliza el siguiente comando:
```
yarn dev
```

Luego, abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Pruebas de Extremo a Extremo con Cypress

Cypress se utiliza para pruebas de extremo a extremo. Para ejecutar las pruebas de Cypress, utiliza el siguiente comando:

```
cypress:open
```

Esto abrirá el Cypress Test Runner, permitiéndote seleccionar y ejecutar pruebas de forma interactiva.

## ¿Por qué Next.js?

Next.js fue elegido para este proyecto debido a su soporte integrado para renderizado del lado del servidor, generación de sitios estáticos y rutas de API. Ofrece un excelente rendimiento desde el principio y simplifica el proceso de desarrollo con características como la división automática de código y la sustitución de módulos en caliente.

## ¿Por qué SWR?

SWR (Stale-While-Revalidate) se utiliza para la obtención de datos en este proyecto debido a su simplicidad y eficiencia. SWR maneja automáticamente el almacenamiento en caché, la revalidación y el manejo de errores, proporcionando una experiencia de obtención de datos suave y optimizada para los usuarios.

## ¿Por qué Tailwind CSS y UI.SHADCN?

Tailwind CSS es un framework de CSS de utilidades que simplifica el proceso de estilización al proporcionar un conjunto de clases de utilidades predefinidas. Promueve la consistencia y el desarrollo rápido al tiempo que permite una personalización fácil. Además, su función de purga garantiza que solo se incluya el CSS necesario en la compilación final, optimizando el rendimiento.

## Conclusión

El proyecto ammper-app aprovecha tecnologías modernas y mejores prácticas para ofrecer una aplicación web robusta y de alto rendimiento. Al utilizar Next.js, SWR, Cypress, Tailwind CSS y TypeScript, el proyecto logra un equilibrio entre la productividad del desarrollador y la experiencia del usuario.