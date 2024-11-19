import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RoomRoutingModule } from './router/room-routing.module';
import { RoomListComponent } from './pages/room-list/room-list.component';
import { RoomFormComponent } from './pages/room-form/room-form.component';

@NgModule({
  declarations: [
    RoomListComponent,
    RoomFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,

    RoomRoutingModule,
  ]
})
export class RoomsModule { }
