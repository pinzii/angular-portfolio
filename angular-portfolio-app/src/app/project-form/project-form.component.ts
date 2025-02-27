import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  //Definición del formulario
  projectForm!: FormGroup;

  ngOnInit(): void{
    this.projectForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  onSubmit(){
    if(this.projectForm.valid){
      console.log('Formulario enviado', this.projectForm.value);
      // Aquí se puede llamar a un servicio para guardar el proyecto
    }else{
      console.log('Formulario inválido');
    }
  }
}
