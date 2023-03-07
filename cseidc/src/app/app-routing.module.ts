import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CseidcComponent } from './cseidc/cseidc.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

const routes: Routes = [
  {
    path:'addUser', component:CseidcComponent
  },
  {
    path:'', component:ViewuserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
