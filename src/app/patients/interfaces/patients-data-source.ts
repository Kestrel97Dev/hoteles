import { Observable } from 'rxjs';
import { Patients } from './patients';

export interface PatientsDataSource {
  getPatients(): Observable<Patients[]>;
  addPatient(patient: Patients): Observable<void>;
  updatePatient(id: number, updatedPatient: Patients): Observable<void>;
  deletePatient(id: number): Observable<void>;
  getPatientById(id: number): Observable<Patients | undefined>;
}