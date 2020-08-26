import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { CreatetodoComponent } from 'src/app/todo/createtodo/createtodo.component';
import { IndextodoComponent } from 'src/app/todo/indextodo/indextodo.component';
import { TodoService } from '../services/todo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatSliderModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  declarations: [
    CreatetodoComponent,
    IndextodoComponent,

  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ],
  providers: [TodoService],
})
export class TodosModule { }
