import { NgModule } from '@angular/core';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { ConfirmDialogComponent } from './pages/confirm-dialog/confirm-dialog.component';
import { AddPatientComponent } from './pages/add-patiente/add-patient.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MenuRoutingModule } from '../layout/router/menu-routing.module';
import { SafeUrlPipe} from './pipes/safe-url-pipe.pipe';

@NgModule({
  declarations: [
    PatientListComponent,
    ConfirmDialogComponent,
    AddPatientComponent,
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MenuRoutingModule
  ]
})
export class PatientsModule { }
