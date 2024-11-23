import { Pipe, PipeTransform } from '@angular/core';
import { Patients } from '../interfaces/patients';

@Pipe({
  name: 'patientsImage'
})
export class PatientsImagePipe implements PipeTransform {

  transform(patients: Patients): string {
    // Si no hay ID y no hay imagen, retorna la imagen por defecto
    if (!patients.id && !patients.profilePicture) {
      return 'assets/no-image.png';
    }

    // Si hay una imagen, retorna esa URL
    if (patients.profilePicture) {
      return patients.profilePicture;
    }

    // Retorno por defecto en caso de no cumplir condiciones anteriores
    return 'assets/no-image.png';
  }
}
