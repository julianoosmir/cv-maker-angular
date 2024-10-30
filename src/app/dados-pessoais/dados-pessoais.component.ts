import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {DadosPessoa} from '../models/DadosPessoais';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dados-pessoais',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './dados-pessoais.component.html',
  styleUrl: './dados-pessoais.component.css'
})
export class DadosPessoaisComponent {
  dadosPessoaForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.dadosPessoaForm = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      whatsapp: ['', Validators.required],
      site: [''],
      email: ['', [Validators.required, Validators.email]],
      endereco: [''],
      dataDeNascimento: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.dadosPessoaForm.valid) {
      const dadosPessoa: DadosPessoa = this.dadosPessoaForm.value;
      console.log(dadosPessoa);
      this.router.navigate(['/formacao']);
    }
  }
}
