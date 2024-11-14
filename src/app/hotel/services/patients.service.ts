import { Injectable } from '@angular/core';
import { Patients } from '../interfaces/patients';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private storageKey = 'patients';  // Cambié el nombre a "patients" para que coincida con el modelo

  // Obtener todos los pacientes
  getPatients(): Patients[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // Agregar un nuevo paciente
  addPatient(patient: Patients): void {
    const patients = this.getPatients();
    patients.push(patient);
    localStorage.setItem(this.storageKey, JSON.stringify(patients));
  }

  // Actualizar un paciente existente
  updatePatient(id: number, updatedPatient: Patients): void {
    const patients = this.getPatients().map(p =>
      p.id === id ? updatedPatient : p
    );
    localStorage.setItem(this.storageKey, JSON.stringify(patients));
  }

  // Eliminar un paciente
  deletePatient(id: number): void {
    const patients = this.getPatients().filter(p => p.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(patients));
  }

}
