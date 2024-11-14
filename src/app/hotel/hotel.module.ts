import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './pages/patients/patients.component';
import { MaterialModule } from '../material/material.module';
import { HotelRoutingModule } from './hotel-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

@NgModule({
  declarations: [
    PatientsComponent,
    LayoutPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HotelRoutingModule,
  ]
})
export class HotelModule { }
