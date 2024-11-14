import { NgModule } from '@angular/core';
import { LayoutComponent } from './pages/layout-page/layout.component';
import { MenuRoutingModule } from './router/menu-routing.module';
import { PatientsModule } from '../patients/patient.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MenuRoutingModule,

    PatientsModule,
  ]
})
export class LayOutModule { }
