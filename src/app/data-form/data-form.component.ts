// data-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  formulario!: FormGroup;
  nextId: number = 1; // Inicialize o contador com 1 ou qualquer valor inicial desejado

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Inicialize o formulário e defina as validações necessárias
    this.formulario = this.fb.group({
      id: [this.getNextId(), Validators.required], // Use o método para obter o próximo ID
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

    // Atualize o ID para o próximo valor
    this.nextId++;
  }

  private getNextId(): number {
    return this.nextId;
  }
}
