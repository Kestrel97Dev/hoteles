import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from '../pages/patient-list/patient-list.component';
import { PatientFormComponent } from '../pages/patiente-form/patient-form.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: PatientListComponent },
      { path: 'add', component:  PatientFormComponent},
      { path: 'edit/:id', component: PatientFormComponent},
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
