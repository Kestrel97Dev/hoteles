import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  public sidebarItems = [
    { label: 'Home', icon: 'home', url: './dashboard' },
    { label: 'patients', icon: 'patient_list', url: '/patient' },
    { label: 'Rooms', icon: 'patient_list', url: '/rooms' },
  ];
}
