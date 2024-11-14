import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'hotel',
    loadChildren: () => import('../hotel/hotel.module').then( m => m.HotelModule),
  },
  {
    path:'',
    redirectTo: 'hotel',
    pathMatch: 'full',
  },
  {
    path:'**',
    redirectTo:'404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
