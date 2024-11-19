import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from '../pages/room-list/room-list.component';
import { RoomFormComponent } from '../pages/room-form/room-form.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: RoomListComponent },
      { path: 'add', component: RoomFormComponent },
      { path: 'edit/:id', component: RoomFormComponent },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
