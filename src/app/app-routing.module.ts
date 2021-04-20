import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { Dash2Component } from './dash2/dash2.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';
import { UserComponent } from './user/user.component';
import { UservComponent } from './userv/userv.component';

const routes: Routes = [{path:"",component:HomeComponent},{path:"login", component:LoginComponent},{path:"login/signup",component:SignupComponent},{path:"nav",component:NavComponent,children:[{
  path:"dash",component:DashComponent
},{path:"user",component:UserComponent} ,{path:"userv",component:UservComponent },{path:"dash2",component:Dash2Component},{path:"update",component:UpdateComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
