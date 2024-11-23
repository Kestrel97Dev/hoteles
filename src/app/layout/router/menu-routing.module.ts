import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../pages/layout-page/layout.component';
import { DashboardPageComponent } from 'src/app/dashboard/pages/dashboard-page/dashboard-page.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardPageComponent
      },
      {
        path: 'rooms',
        loadChildren: () => import('../../rooms/room.module').then(m => m.RoomsModule),
      },
      {
        path: 'patient',
        loadChildren: () => import('../../patients/patient.module').then(m => m.PatientsModule),
      },

      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
