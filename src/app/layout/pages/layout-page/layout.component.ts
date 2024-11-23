import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  public sidebarItems = [
    { label: 'Inicio', icon: 'home', url: './dashboard' },
    { label: 'Paciente', icon: 'patient_list', url: '/patient' },
    { label: 'Habitaciones', icon: 'patient_list', url: '/rooms' },
  ];
}
