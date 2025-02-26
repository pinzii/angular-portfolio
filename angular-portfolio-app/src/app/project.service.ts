import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects = [
    { id: 1, name: 'Portafolio Personal', description: 'Un sitio para mostrar mis proyectos.' },
    { id: 2, name: 'App de Tareas', description: 'Aplicación para gestionar tareas diarias.' },
    { id: 3, name: 'Dashboard de Analytics', description: 'Dashboard para visualizar datos de negocio.' }
  ];
  constructor() {}

  getProjects() {
    return this.projects;
  }
}
