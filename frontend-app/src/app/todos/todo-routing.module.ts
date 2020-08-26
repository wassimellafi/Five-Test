import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatetodoComponent } from 'src/app/todo/createtodo/createtodo.component';
import { IndextodoComponent } from 'src/app/todo/indextodo/indextodo.component';
const Routes: Routes = [
    { path : '', redirectTo: 'todo',  pathMatch: 'full' },
    { path: 'todo', component: CreatetodoComponent },
    { path: 'indextodo', component: IndextodoComponent },
  ];
@NgModule({
    imports: [RouterModule.forChild(Routes)],
    exports: [RouterModule]
})
export class TodoRoutingModule {
}
