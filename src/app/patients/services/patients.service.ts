import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Patients } from '../interfaces/patients';
import { environmenst } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private baseUrl: string = environmenst.baseUrl+'/patients';

  constructor(private http: HttpClient) { }

  // Obtener todos los pacientes
  getPatients(): Observable<Patients[]> {
    return this.http.get<Patients[]>(`${this.baseUrl}`);
  }

  getPatientsById(id:string):Observable <Patients|undefined>{
    return this.http.get<Patients>(`${this.baseUrl}/${id}`)
        .pipe(
            catchError( error => of(undefined) )
        );
  }

  addPatient(patients: Patients): Observable<Patients> {
    return this.http.post<Patients>(`${this.baseUrl}`, patients);
  }

  updatePatient(patients: Patients): Observable<Patients> {
    if (!patients.id) throw Error('Patients id is required')
    return this.http.put<Patients>(`${this.baseUrl}/${patients.id}`, patients);
  }

  deletePatient(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/${id}`)
      .pipe(
        map(resp => true),
        catchError(err => of(false)),
      );
  }


}
