import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent implements OnInit {
  formulario!: FormGroup;
  @Output() dataChanged: EventEmitter<void> = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private dataService: DataService) {}

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
  }

  onSubmit(): void {
    const formData = this.formulario.value;
    this.dataService.setData(formData); // Armazenar no serviço
    this.dataChanged.emit();
    this.formulario.reset({
      id: this.generateUniqueId(), // Atualizar ID para o próximo valor
    });
  }

  onSearch(): void {
    const idToSearch = this.formulario.get('id')?.value;
    const storedData = this.dataService.getData();

    const foundData = storedData.find((item: any) => item.id == idToSearch);

    if (foundData) {
      this.formulario.patchValue(foundData);
    } else {
      this.formulario.reset();
      alert('ID não encontrado');
    }
  }

  private generateUniqueId(): number {
    return Math.floor(Math.random() * 1000);
  }
}
