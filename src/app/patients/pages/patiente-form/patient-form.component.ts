import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsService } from '../../services/patients.service';
import { Gender, Patients } from '../../interfaces/patients';
import { switchMap, filter } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-patient',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  isSubmitting = false; // Flag para prevenir múltiples envíos

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private patientsService: PatientsService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  public patientForm = new FormGroup({
    id: new FormControl<number | null>(null),
    firstName: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    lastName: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    gender: new FormControl<Gender>(Gender.Other),
    birthDate: new FormControl('', { validators: [Validators.required] }),  // Añadido 'required'
    nationality: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    medicalInfo: new FormControl(''),
    profilePicture: new FormControl('')
  });

  get currentPatients(): Patients {
    const patient = this.patientForm.value;
    return {
      ...patient, 
      id: patient?.id ? Number(patient.id) : null, 
    } as Patients; 
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;
    this.activateRouter.params
      .pipe(
        switchMap(({ id }) => this.patientsService.getPatientsById(id))
      ).subscribe(patients => {
        if (!patients) return this.router.navigateByUrl('/list');
        this.patientForm.reset(patients as Object);
        return;
      })
  }

  onSubmit(): void {
    if (this.isSubmitting) return; // Evita ejecutar si ya está procesando
    this.isSubmitting = true; // Desactiva el botón de guardar mientras se procesa
  
    if (this.patientForm.controls['firstName'].invalid || this.patientForm.controls['lastName'].invalid) {
      this.showSnackbar('Por favor completa los campos obligatorios: Nombre y Apellido');
      this.isSubmitting = false;
      return;
    }
  
    if (this.currentPatients.id) {
      this.patientsService.updatePatient(this.currentPatients)
        .subscribe({
          next: patients => {
            this.router.navigate(['/patient/list']);
            this.showSnackbar(`${patients.firstName} updated!`);
          },
          complete: () => this.isSubmitting = false // Liberar flag al terminar
        });
      return;
    }
  
    this.patientsService.addPatient(this.currentPatients)
      .subscribe({
        next: patients => {
          this.router.navigate(['/patient/list']);
          this.showSnackbar(`${patients.firstName} created!`);
        },
        complete: () => this.isSubmitting = false // Liberar flag al terminar
      });
  }

  showSnackbar(message: string): void {
    this.snackBar.open(message, 'done', {
      duration: 2500,
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.patientForm.patchValue({
        profilePicture: file // Asigna el archivo directamente a profilePicture
      });
    }
  }

  getImageUrl(blob: Blob): string {
    return URL.createObjectURL(blob);
  }

}
