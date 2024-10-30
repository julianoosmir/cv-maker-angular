import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Experiencia} from '../models/Experiencia';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {
  experienciaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.experienciaForm = this.fb.group({
      cargo: ['', Validators.required],
      empresa: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataFim: [''],
      descricao: [''],
      ferramentas: ['']
    });
  }

  onSubmit() {
    if (this.experienciaForm.valid) {
      const experiencia: Experiencia = this.experienciaForm.value;
      console.log(experiencia);
    }
  }
}
