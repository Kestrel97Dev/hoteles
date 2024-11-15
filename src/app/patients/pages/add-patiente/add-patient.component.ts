import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientsService } from '../../services/patients.service';
import { Patients } from '../../interfaces/patients';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  patientForm: FormGroup;
  profilePicture: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private patientsService: PatientsService
  ) {
    this.patientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: [''],
      birthDate: [''],
      nationality: [''],
      address: [''],
      phoneNumber: [''],
      email: ['', [Validators.email]],
      medicalInfo: [''],
      staId: ['']
    });
  }
  
  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.profilePicture = file;
    }
  }

  onSavePatient(): void {
    if (this.patientForm.valid) {
      const newPatient: Patients = {
        ...this.patientForm.value,
        profilePicture: this.profilePicture ? this.profilePicture : null,
        // Puedes agregar más propiedades si es necesario
      };

      // Llamamos al servicio para agregar el paciente
      this.patientsService.addPatient(newPatient).subscribe({
        next: (savedPatient) => {
          console.log('Paciente guardado:', savedPatient);
          // Redirigir a la lista de pacientes
          this.router.navigate(['/patients/list-patient']);
        },
        error: (err) => {
          console.error('Error al guardar paciente:', err);
        }
      });
    }
  }
}
 