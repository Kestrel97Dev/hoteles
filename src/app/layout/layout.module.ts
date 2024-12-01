import { NgModule } from '@angular/core';
import { LayoutComponent } from './pages/layout-page/layout.component';
import { MenuRoutingModule } from './router/menu-routing.module';
import { PatientsModule } from '../patients/patient.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RoomsModule } from '../rooms/room.module';
import { CaterotysModule } from '../categories/category.module';

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MenuRoutingModule,

    PatientsModule,
    RoomsModule,
    CaterotysModule,
  ]
})
export class LayOutModule { }
