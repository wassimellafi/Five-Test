import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateComponent } from './components/update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule} from '@angular/material/table';
import { ServiceService } from 'src/app/services/service.service';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule
} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { TodosModule } from './todos/todos.module';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UpdateComponent,
    HeaderComponent,
    NotFoundComponentComponent,


  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
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
    TodosModule,
    HttpClientModule,

  ],
  providers: [ServiceService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
