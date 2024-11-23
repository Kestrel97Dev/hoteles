import { NgModule } from '@angular/core';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { ConfirmDialogComponent } from './pages/confirm-dialog/confirm-dialog.component';
import { PatientFormComponent } from './pages/patiente-form/patient-form.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';;
import { PatientRoutingModule } from './router/patient-routing.module';

@NgModule({
  declarations: [
    PatientListComponent,
    ConfirmDialogComponent,
    PatientFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    
    PatientRoutingModule,
  ]
})
export class PatientsModule { }
