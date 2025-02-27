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
