import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private storedData: any[] = [];

  getData(): any[] {
    return this.storedData;
  }

  setData(data: any): void {
    this.storedData.push(data);
  }
}
