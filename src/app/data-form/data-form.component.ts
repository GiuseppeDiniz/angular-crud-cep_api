import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})

export class DataFormComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Inicialize o formulário e defina as validações necessárias
    this.formulario = this.fb.group({
      id: [''], // Você pode adicionar um valor padrão aqui se necessário
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cep: [''],
      numero: [''],
      complemento: [''],
      rua: [''],
      bairro: [''],
      cidade: [''],
      estado: ['']
    });
  }

  onSubmit(): void {
    // Lógica para armazenar no localStorage e sessionStorage
    const formData = this.formulario.value;

    // Armazene no localStorage
    localStorage.setItem('seuChaveLocalStorage', JSON.stringify(formData));

    // Armazene no sessionStorage
    sessionStorage.setItem('seuChaveSessionStorage', JSON.stringify(formData));
  }
}
