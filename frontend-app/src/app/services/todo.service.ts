import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  itemss = [];
  constructor() { }
  addItem(item) {
    this.itemss.push(item);
    localStorage.setItem('todos', JSON.stringify(this.itemss));
  }
  getItems() {
    return this.itemss = JSON.parse(localStorage.getItem('todos')) || [];
  }
  getItembyIndex(i) {
    this.itemss = JSON.parse(localStorage.getItem('todos')) || [];
    return this.itemss[i];
  }

}
