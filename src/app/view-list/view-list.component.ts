import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  localStorageData: any[] = [];
  sessionStorageData: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Obtenha os dados do localStorage
    const localStorageString = localStorage.getItem('seuChaveLocalStorage');
    this.localStorageData = localStorageString ? [JSON.parse(localStorageString)] : [];

    // Obtenha os dados do sessionStorage
    const sessionStorageString = sessionStorage.getItem('seuChaveSessionStorage');
    this.sessionStorageData = sessionStorageString ? [JSON.parse(sessionStorageString)] : [];
  }
}
