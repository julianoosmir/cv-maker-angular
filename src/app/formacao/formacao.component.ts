import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Formacao} from '../models/Formacao';

@Component({
  selector: 'app-formacao',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './formacao.component.html',
  styleUrl: './formacao.component.css'
})
export class FormacaoComponent {
  formacaoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formacaoForm = this.fb.group({
      instituicao: ['', Validators.required],
      curso: ['', Validators.required],
      grau: ['', Validators.required],
      dataDeInicio: ['', Validators.required],
      dataDeTermino: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formacaoForm.valid) {
      const formacao: Formacao = this.formacaoForm.value;
      console.log(formacao);
    }
  }
}
