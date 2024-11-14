import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/pages/layout-page/layout.component';

const routes: Routes = [

  {
    path:'',
    component: LayoutComponent,
    loadChildren: () => import('../layout/layout.module').then( m => m.LayOutModule),
  },
  {
    path:'',
    redirectTo: '',
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
export class AppRoutingModule { }
