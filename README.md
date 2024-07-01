# Evaluación Final - Taller de Programación II (TP2)

## Información del proyecto

### - _Alumno: Ignacio Julián Castro Centeno_

### - _Materia: Taller de Programación II (TP2)_

### - _Profesora: Débora Rolón_

### - _Fecha de entrega: 01/07/2024 - 22hs_

## Aclaraciones

- _Modifiqué el formato de codificación del archivo 'package.json' de LF a CRLF_. Esto para evitar posibles incompatibilidades entre los diferentes sistemas operativos, al momento de trabajar con el archivo.

- _Agregué un archivo '.gitignore' para cumplir con las buenas prácticas_, evitando subir los siguientes elementos: la carpeta 'node_modules'; el archivo 'package-lock.json'; todos los archivos temporales o de logs (para evitar 'bloating'); y los archivos '.env' con información eventualmente información sensible (API keys, variables de entorno, secretos, contraseñas, etc.)

- _Se implementó el patrón de diseño estructural MVC (Model-View-Controller)_ dentro del proyecto, orientado a la construcción de una RESTful API. Se disponen de las carpetas genéricas que caracterizan a esta arquitectura ('routes', 'controllers', 'services', 'models'), todo contenido dentro de un directorio principal 'src'.

- _Se implementó el patrón de diseño estructural DAO (Data Access Object)_ dentro del proyecto, haciendo uso de otro patrón diseño llamado 'Abstract Factory'. La arquitectura DAO nos permite generar una 'abstract interface' entre la aplicación y los diferentes mecanismos de persistencia disponibles, de modo que la capa 'services' correspondiente a cada entidad, hable directamente con la factoría, en lugar de hablar con cada modelo concreto. Esto permite ocultarle a los servicios, los detalles de implementación: el cómo es almacenada y accesada la información.

La aplicación está lista para ser lanzada con el framework Express, luego de utilizarse el comando 'npm install' que instalará todas las dependencias requeridas para el funcionamiento del proyecto.
