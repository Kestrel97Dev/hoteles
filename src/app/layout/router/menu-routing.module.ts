import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../pages/layout-page/layout.component';
import { PatientListComponent } from 'src/app/patients/pages/patient-list/patient-list.component';
import { DashboardPageComponent } from 'src/app/dashboard/pages/dashboard-page/dashboard-page.component';
import { AddPatientComponent } from 'src/app/patients/pages/add-patiente/add-patient.component';
import { RoomsModule } from '../../rooms/room.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'list-patient', component: PatientListComponent},
      { path: 'new-patient', component: AddPatientComponent},
      { path: 'edit-patient/:id', component: AddPatientComponent},

      { path: 'dashboard', component: DashboardPageComponent},
      {
        path:'rooms',
        loadChildren: () => import('../../rooms/room.module').then( m => m.RoomsModule),
      },

      { path: '**', redirectTo: 'dashboard'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
