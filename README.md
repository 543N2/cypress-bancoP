# RETO TECNICO TAE
A continuacion se presenta la solucion al reto tecnico de Test Automation.

## PREREQUISITOS
- Instalar node (y npm): https://nodejs.org/en/download
- Tener instalado el navegador Google Chrome

## INSTRUCCIONES DE EJECUCION
- Clonar el repositorio: git clone git@github.com:543N2/cypress-bancoP.git
- Acceder al directorio del proyecto por terminal:
  > cd cypress-banco-pichincha
- Instalar las dependencias:
  > npm install
- Para correr las pruebas en interfaz grafica, ejecutar:
   > npm run test
- Para correr las pruebas en consola, ejecutar:
   > npm run test:headless
- Abrir en navegador el reporte generado: cypress\reports\html\index.html 

## VERSIONES UTILIZADAS
- node v18.17.0
- npm v9.6.7
- git v2.41.0.windows.1
- cypress v12.17.2
- cypress-mochawesome-reporter v3.5.1
- chrome v115.0.5790.102

## OBSERVACIONES Y CONCLUSIONES

### Prueba E2E (UI)

Dado el tamaño del ejercicio, se optó por utilizar Custom Commands en lugar de Page Object Model,
reuniendo tanto interacciones como pasos comunes en las pruebas requeridas, y agrupando los localizadores
de elementos en un objeto aparte. Se encapsulan comportamientos en metodos referentes a los pasos de prueba 
sugeridos.

En el principio del flujo se encontró que el botón de "Add to cart" de los productos en la página
principal tiene comportamiento diferente dependiendo de si el producto requiere información
extra, cargando la página del producto dado el caso, o agregandolo al carrito en caso contrario.

Para el caso del producto "iPhone", a pesar de no contar con stock, puede ser agregado al carrito y 
su flujo de compra puede completarse.

En el proceso de completar el "checkout" de invitado sucede un cambio de dominio asociado a la
implementación del protocolo https para la sección de captura de información sensible del comprador.

De manera aparentemente aleatoria, la aplicación presenta una excepción: 
"pagespeed not defined". Se ha restringido el comportamiento de falla de la ejecución para las
excepciones, con motivo de no interferir con las pruebas funcionales.

Como opción de mejora, se plantea la incorporación de Page Object Model o App Actions, además de
incluir flujos adicionales a los "happy path".


### Prueba API

De acuerdo al enunciado del requerimiento, se constituye la suite considerando cada uno de los items
como una prueba individual. Se encapsulan comportamientos dentro de métodos con el respectivo nombre
y se hace uso de Custom Commands.

Con respecto a la API, se observa que un usuario puede ser creado sin realizar autenticación previa,
a pesar de que existe un endpoint para realizar el inicio de sesión.

Adicionalmente se observan las respuestas del servidor, en cuyo cuerpo se reutiliza el campo "message"
para devolver valores de algunos otros campos. Se utiliza esta caracteristica para hacer las 
respectivas aserciones.

Llama la atención el uso que se le da al campo "username" como identificador principal para realizar
operaciones con la gran mayoria de los endpoint en lugar de usar el campo id. Tambien, el que no se
encuentre disponible un endpoint para PATCH, el cual evitaría el tener que enviar todo el objeto que
ha de ser actualizado, centrandose unicamente en los campos modificados.

Como opciones de mejora se plantea el parametrizar los metodos para reducir redundancias en el codigo.
Tambien el incluir mas informacion en los datos de prueba y realizar el cargue mediante fixtures.
Se recomienda incluir not-happy-paths y probar los demas endpoint que se encuentren relacionados. 