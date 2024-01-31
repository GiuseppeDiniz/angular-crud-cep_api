import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css'],
})
export class ViewListComponent implements OnInit {
  localStorageData: any[] = []; // Corrigir o nome da propriedade

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.localStorageData = this.dataService.getData(); // Corrigir o nome da propriedade
  }
}
