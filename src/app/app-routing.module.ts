import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent  } from './links/login/login.component'
import { PrincipalComponent } from './links/principal/principal.component';
import { RegistroComponent } from './links/registro/registro.component';
import { HomeComponent } from './sections/home/home.component';

const routes: Routes = [
  { path:'', component: PrincipalComponent },
  { path:'login', component: LoginComponent },
  { path:'registro', component: RegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
