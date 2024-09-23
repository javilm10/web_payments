# Sistema de Pago - React App

Este proyecto es una aplicación web en **React.js** que permite realizar pagos utilizando **tarjeta de crédito** o **monedas**. Se conecta a una API que se encuentra en `http://localhost:8000` para procesar las transacciones.

## Características

- **Pago con tarjeta**: Los usuarios pueden realizar pagos introduciendo la información de su tarjeta.
- **Pago con monedas**: Opción para realizar pagos utilizando monedas virtuales.
- **Validación de pagos**: La aplicación valida la información introducida por el usuario antes de realizar el pago.
- **Comunicación con API**: La app envía solicitudes a una API REST alojada en `http://localhost:8000` para procesar las transacciones.

## Requisitos

Antes de empezar, asegúrate de tener los siguientes componentes instalados:

- **Node.js** (v14 o superior)
- **npm** (v6 o superior) o **yarn**

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/javilm10/web_payments.git
   ```

2. Dirígete a la carpeta del proyecto:

   ```bash
   cd web_payments
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

   O si prefieres usar **yarn**:

   ```bash
   yarn install
   ```

## Uso

### Ejecutar la aplicación localmente
La API para este proyecto esta en este repositorio https://github.com/javilm10/api_payments.git
1. Asegúrate de que la API está corriendo en `http://localhost:8000`.
   
   Puedes iniciar tu API ejecutando el servidor con el siguiente comando (dependiendo de tu entorno backend):
   
   ```bash
   python manage.py runserver 8000
   ```
   (si usas Django) o el equivalente en tu framework backend.

2. Para iniciar la aplicación React en modo de desarrollo, ejecuta el siguiente comando:

   ```bash
   npm start
   ```

   O si usas **yarn**:

   ```bash
   yarn start
   ```

3. Abre tu navegador y ve a `http://localhost:3000` para ver la aplicación en funcionamiento.

### Flujo de trabajo

- Selecciona el método de pago que deseas utilizar (tarjeta o monedas).
- Completa los datos requeridos (tarjeta o la cantidad de monedas).
- La aplicación enviará los datos a la API ubicada en `http://localhost:8000` y procesará la transacción.
- Recibirás una confirmación si el pago fue exitoso o un mensaje de error si hubo algún problema.

## Construcción del proyecto

Para crear una versión optimizada para producción, ejecuta:

```bash
npm run build
```

O si usas **yarn**:

```bash
yarn build
```

Esto generará una carpeta `build` con los archivos listos para producción.

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).
```

Este `README.md` proporciona información clara y completa sobre cómo instalar, usar, y contribuir al proyecto. Si tienes más detalles sobre la API o los métodos de pago, puedes añadirlos a las secciones correspondientes.