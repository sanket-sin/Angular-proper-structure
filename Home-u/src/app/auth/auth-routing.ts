import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";



export const AuthRouting : Routes = [
    {path:'', component: LoginComponent},
    {path:'register', component: RegisterComponent},


]