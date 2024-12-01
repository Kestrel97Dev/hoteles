import { Component, OnInit } from '@angular/core';
import { Patients } from '../../interfaces/patients';
import { PatientsService } from '../../services/patients.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent  implements OnInit{

  patients: Patients[] = [];  // Array para almacenar los pacientes

  displayedColumns: string[] = 
  [
    'nombre', 
    'telefono', 
    'email', 
    'acciones'
  ];

  constructor(
    private patientsService: PatientsService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // Cargar los pacientes al iniciar el componente
    this.loadPatients();
  }

  // Método para cargar los pacientes desde el localStorage
  loadPatients(): void {
    this.patientsService.getPatients()
    .subscribe(patients => this.patients = patients);
  }

  // Método para eliminar un paciente
  deletePatient(patient: Patients): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: patient, // Pasar la información necesaria al diálogo
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.patientsService.deletePatient(patient.id).subscribe(() => {
          this.showSnackbar('Paciente eliminado correctamente.');
          this.loadPatients(); // Recargar la lista de pacientes
        });
      }
    });
  }
  
  showSnackbar(message: string): void {
    this.snackBar.open(message, 'Cerrar', { duration: 3000 });
  }

}
