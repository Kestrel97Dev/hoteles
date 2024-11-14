import { NgModule } from '@angular/core';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { ConfirmDialogComponent } from './pages/confirm-dialog/confirm-dialog.component';
import { AddFormDialogComponent } from './pages/add-form-dialog/add-form-dialog.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    PatientListComponent,
    ConfirmDialogComponent,
    AddFormDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class PatientsModule { }
