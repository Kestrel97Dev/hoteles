import { NgModule } from '@angular/core';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { ConfirmDialogComponent } from './pages/confirm-dialog/confirm-dialog.component';
import { AddPatientComponent } from './pages/add-patiente/add-patient.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MenuRoutingModule } from '../layout/router/menu-routing.module';

@NgModule({
  declarations: [
    PatientListComponent,
    ConfirmDialogComponent,
    AddPatientComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MenuRoutingModule
  ]
})
export class PatientsModule { }
