# Checklist Diario

## Día [Fecha]

- [ ] **Estudio Teórico:** Revisión de conceptos de Angular.
- [ ] **Ejercicios Prácticos:** Realizar ejercicios y pequeños retos de código.
- [ ] **Desarrollo del Proyecto:** Avanzar en la aplicación (configuración inicial, creación de componentes).
- [ ] **Revisión y Commit:** Revisar avances y realizar commit con un mensaje descriptivo.

## Día 2025-02-24

- [x] **Configuración de Git:** Repositorio inicial creado y checklist configurado.
- [x] **Instalación de Angular CLI:** Comprobada la instalación de Node.js y Angular CLI.
- [x] **Creación del proyecto Angular:** Proyecto generado con componentes standalone.
- [x] **Desarrollo del componente header:** Componente header creado e integrado.
- [x] **Desarrollo del componente footer:** Pendiente.

## Día 2025-02-25

[x] **Implementación del Servicio ProjectService:**  
 Servicio creado para proporcionar una lista de proyectos.

- [x] **Creación e Integración del Componente ProjectItem:**  
       Componente creado para mostrar cada proyecto y gestionar la comunicación (usando @Input y @Output).

- [x] **Verificar Evento de Selección de Proyecto:**  
       Asegurarse de que al hacer clic en un proyecto se emita el evento `projectSelected` y se muestre el mensaje en consola.

## Día 2025-02-26

[x] **Implementación de Reactive Forms:**

- **ProjectFormComponent**: Componente creado para manejar formularios reactivos con validaciones.

- [x] **Consumo de APIs utilizando HttpClient:**
  - **DataService**: Servicio creado para consumir datos de una API (JSONPlaceholder).
  - **PostsComponent**: Componente creado para mostrar posts obtenidos desde la API.
- [x] **Configuración Global de HttpClient:**

  - HttpClient configurado globalmente en main.ts con `provideHttpClient` (por lo que no se importa en cada componente individual).

- [x] **Verificar Funcionalidad Completa:**
  - Confirmar que los eventos (por ejemplo, selección de proyecto) y validaciones del formulario se disparen correctamente.

## Día 2025-03-11

✔ [x] Convertir AuthInterceptor de clase a función (HttpInterceptorFn).
✔ [x] Agregar Authorization: Bearer <token> a todas las solicitudes HTTP.
✔ [x] Registrar el interceptor en main.ts con withInterceptors([authInterceptor]).
✔ [x] Confirmar en la pestaña Red (Network) que la cabecera Authorization se agrega correctamente.

2. Implementación de errorInterceptor (Manejo global de errores)
   ✔ [x] Convertir ErrorInterceptor de clase a función (HttpInterceptorFn).
   ✔ [x] Registrar el interceptor en main.ts con withInterceptors([errorInterceptor]).
   ✔ [x] Manejar errores 401, 404 y 500 con mensajes personalizados.
   ✔ [x] Probar la funcionalidad con una URL incorrecta en data.service.ts.
   ✔ [x] Confirmar que las alertas de error aparecen correctamente.

3. Verificación del funcionamiento de los interceptores
   ✔ [x] Agregar console.log() en los interceptores para revisar el flujo de ejecución.
   ✔ [x] Confirmar en la consola (F12 → Console) que las solicitudes pasan por authInterceptor.
   ✔ [x] Confirmar que los errores son interceptados correctamente por errorInterceptor.

4. Confirmación del código y control de versiones
   ✔ [x] Realizar git add . para agregar los cambios.
   ✔ [x] Realizar git commit -m "Implementación de interceptores HTTP en Angular: authInterceptor y errorInterceptor".
   ✔ [x] Subir cambios con git push origin feature/interceptors.
   ✔ [x] (Opcional) Crear un Pull Request en GitHub/GitLab/Bitbucket.

## Día 2025-03-19

✔ [x] Configurar json-server como backend falso.
✔ [x] Crear db.json con usuarios de prueba.
✔ [x] Implementar AuthService para manejar login/logout.
✔ [x] Usar Local Storage para guardar el token.
✔ [x] Proteger rutas con authGuard.
✔ [x] Probar el flujo completo de login/logout.
✔ [x] Verificar almacenamiento del token en Local Storage.
✔ [x] Bloquear rutas protegidas si el usuario no está autenticado.
✔ [x] Realizar git commit -m "Implementación de autenticación con json-server, login y almacenamiento de token".
✔ [x] Subir cambios con git push origin main.

## Día 2025-03-22

✔ [x] Implementar formulario de registro de usuarios con validación.  
✔ [x] Conectar el registro con json-server (endpoint `/users`).  
✔ [x] Guardar token falso al registrarse y redirigir al dashboard.  
✔ [x] Mostrar dashboard personalizado tras login o registro.  
✔ [x] Proteger dashboard con authGuard.  
✔ [x] Validación completa de formularios login y registro con NgModel.  
✔ [x] Inputs centrados con feedback visual (bordes verde/rojo según validez).  
✔ [x] Rediseño visual con estilo glassmorphism y fondo degradado.  
✔ [x] Botones con gradiente moderno y efecto hover.  
✔ [x] Corrección del patrón de validación para aceptar emails válidos.  
✔ [x] Unificación de estilos entre login y registro.  
✔ [x] Mejora de experiencia visual (centrado vertical, diseño limpio).  
✔ [x] Confirmar funcionamiento visual y validaciones en ambos formularios.  
✔ [x] Realizar git commit -m "Rediseño completo de formularios de login y registro con validaciones y estilo moderno".  
✔ [x] Subir cambios con git push origin main.
