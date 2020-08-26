import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-indextodo',
  templateUrl: './indextodo.component.html',
  styleUrls: ['./indextodo.component.css']
})
export class IndextodoComponent implements OnInit {
  itemss: any = [];
  today: number = Date.now();
  constructor(
    private ServiceTodo: TodoService
  ) { }

  ngOnInit() {
    this.itemss = this.ServiceTodo.getItems();
  }
  removeForm(i) {
    this.itemss.splice(i, 1);
    localStorage.setItem('todos', JSON.stringify(this.itemss));
  }

}
