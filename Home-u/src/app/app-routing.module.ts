import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRouting } from './auth/auth-routing';
import { CoreRouting } from './layout/core/core-routing';
import { MainRouting } from './layout/main/main-routing';

const routes: Routes = [
  ...AuthRouting,...CoreRouting,...MainRouting
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
