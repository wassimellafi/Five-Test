import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-createtodo',
  templateUrl: './createtodo.component.html',
  styleUrls: ['./createtodo.component.css']
})
export class CreatetodoComponent implements OnInit {
  myForm: FormGroup;
  submitted: boolean;
  items: any = [];
  constructor(
    private ServiceTodo: TodoService
  ) { }

  ngOnInit() {
    this.items = JSON.parse(localStorage.getItem('items')) || [];
  }


}
