import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  formulario!: FormGroup;
  @Output() dataChanged: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      id: [this.generateUniqueId()],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cep: [''],
      numero: [''],
      complemento: [''],
      rua: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
    });

    // Inscreva-se no evento valueChanges do campo CEP
    this.formulario.get('cep')?.valueChanges.subscribe((cep) => {
      if (cep) {
        this.onSearch();
      }
    });
  }

  onSubmit(): void {
    const formData = this.formulario.value;
    this.dataService.setData(formData);
    this.dataChanged.emit();
    this.formulario.reset({
      id: this.generateUniqueId(),
    });
  }

  onSearch(): void {
    const cep = this.formulario.get('cep')?.value;

    if (cep) {
      this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe(
        (data: any) => {
          this.formulario.patchValue({
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
          });
        },
        (error) => {
          console.error('Erro ao consultar o CEP', error);
        }
      );
    }
  }

  private generateUniqueId(): number {
    return Math.floor(Math.random() * 1000);
  }
}
