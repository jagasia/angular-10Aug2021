import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'login', component:LoginComponent, outlet:'col1'},
  {path:'signup', component:SignUpComponent, outlet:'col1'},
  {path:'logout', component:LogoutComponent, outlet:'col2'},
  {path:'logout', component:LogoutComponent, outlet:'col1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
