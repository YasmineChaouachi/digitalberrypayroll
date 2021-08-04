import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListedessalariesComponent } from './listedessalaries/listedessalaries.component';
import { MoredetailsComponent } from './moredetails/moredetails.component';
import { PaieComponent } from './paie/paie.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"ListeDesSalaries",component:ListedessalariesComponent},
  {path:"Moredetails",component:MoredetailsComponent},
  {path:"Gestion-de-la-paie",component:PaieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
