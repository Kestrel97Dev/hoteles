import { Component, OnInit } from '@angular/core';
import { Patients } from '../../interfaces/patients';
import { PatientsService } from '../../services/patients.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent  implements OnInit{

  patients: Patients[] = [];  // Array para almacenar los pacientes

  displayedColumns: string[] = ['Nombre', 'Teléfono', 'Correo', 'acciones'];

  constructor(private patientsService: PatientsService) {}

  ngOnInit(): void {
    // Cargar los pacientes al iniciar el componente
    this.loadPatients();
  }

  // Método para cargar los pacientes desde el localStorage
  loadPatients(): void {
    this.patientsService.getPatients()
    .subscribe(patients => this.patients = patients);
  }

  // Método para agregar un paciente
  addPatient(patient: Patients): void {
    this.patientsService.addPatient(patient);
    this.loadPatients();  // Recargar la lista de pacientes
  }

  // Método para eliminar un paciente
  deletePatient(id: number): void {
    this.patientsService.deletePatient(id);
    this.loadPatients();  // Recargar la lista de pacientes
  }

  // Método para actualizar un paciente
  updatePatient(id: number, updatedPatient: Patients): void {
    this.patientsService.updatePatient(updatedPatient);
    this.loadPatients();  // Recargar la lista de pacientes
  }

  showDialogFormAddPatients() {
    // const dialogRef = this.dialog.open(FormDialogComponent, {
    //   width: '300px',
    //   data: { codigo: 0, descripcion: '', precio: 0 }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.articulos.push(result);
    //   }
    // });
  }

}
