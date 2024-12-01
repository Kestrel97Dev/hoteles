import { NgModule } from '@angular/core';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { PatientFormComponent } from './pages/patiente-form/patient-form.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';;
import { PatientRoutingModule } from './router/patient-routing.module';
import { PatientsImagePipe } from './pipes/patient-image.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PatientListComponent,
    PatientFormComponent,
    PatientsImagePipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    
    PatientRoutingModule,
  ]
})
export class PatientsModule { }
