import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css'],
})
export class LayoutPageComponent {
  // Array de objetos que representan los elementos del sidebar
  public sidebarItems = [
    { label: 'patients', icon: 'patient_list', url: './patients'},
  ];
}
