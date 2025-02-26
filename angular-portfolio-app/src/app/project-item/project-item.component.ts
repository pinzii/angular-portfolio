import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-item',
  standalone: true,  
  template: `
    <div class="project-item" (click)="selectProject()">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
    </div>
  `,
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent {
  // Recibe el proyecto desde el componente padre
  @Input() project: any;
  // Emite el proyecto seleccionado al padre
  @Output() projectSelected = new EventEmitter<any>();


  selectProject(){    
    this.projectSelected.emit(this.project);
}


}
