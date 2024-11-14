import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
  ],
  imports: [
    MaterialModule,
  ]
})
export class DashboardModule { }
