import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './pages/patients/patients.component';
import { MaterialModule } from '../material/material.module';
import { HotelRoutingModule } from './hotel-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { FormDialogComponent } from './pages/form-dialog/form-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    PatientsComponent,
    LayoutPageComponent,
    FormDialogComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HotelRoutingModule,
  ]
})
export class HotelModule { }
