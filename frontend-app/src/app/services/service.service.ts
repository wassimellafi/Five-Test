import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  users: any;
  items = [];
  constructor(private http: HttpClient) { }
  addItem(item) {
    this.items.push(item);
    localStorage.setItem('items', JSON.stringify(this.items));
  }
  getItems() {
    return this.items = JSON.parse(localStorage.getItem('items')) || [];
  }

}
