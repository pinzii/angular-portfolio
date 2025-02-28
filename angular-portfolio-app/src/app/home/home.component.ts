import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../project.service';
import { ProjectItemComponent } from '../project-item/project-item.component';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { PostsComponent } from '../posts/posts.component';
import { CustomPipe } from '../custom.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectItemComponent, ProjectFormComponent, PostsComponent, CustomPipe], //usar directivas *ngFor, *ngIf, *ngSwitch etc
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects: any[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();   
  }

  onProjectSelected(project: any): void{
    console.log('proyecto seleccionado', project);
  }
}
