import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UpdateComponent } from './components/update/update.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NotFoundComponentComponent } from 'src/app/components/not-found-component/not-found-component.component';
const routes: Routes = [
  { path : '', redirectTo: 'login',  pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'creersondages', component: UpdateComponent, canActivate: [AuthGuardService]},
  { path: '404', component: NotFoundComponentComponent},
  {
    path: 'todo',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./todos/todos.module').then(module => module.TodosModule)
  },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
