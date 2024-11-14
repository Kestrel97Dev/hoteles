import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../pages/layout-page/layout.component';
import { PatientListComponent } from 'src/app/patients/pages/patient-list/patient-list.component';
import { DashboardPageComponent } from 'src/app/dashboard/pages/dashboard-page/dashboard-page.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'patients', component: PatientListComponent},
      { path: 'dashboard', component: DashboardPageComponent},
      { path: '**', redirectTo: 'dashboard'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
