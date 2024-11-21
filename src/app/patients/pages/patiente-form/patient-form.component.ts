import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsService } from '../../services/patients.service';
import { Gender, Patients } from '../../interfaces/patients';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-patient',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit{

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private patientsService: PatientsService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  public patientForm = new FormGroup({
    id: new FormControl<string>(''),
    firstName: new FormControl<string>('',{nonNullable:true}),
    lastName: new FormControl<string>('',{nonNullable:true}),                 
    gender:new FormControl<Gender>(Gender.Other),                  
    birthDate:new FormControl(''),                 
    nationality:new FormControl(''),             
    address:new FormControl(''),                  
    phoneNumber:new FormControl(''),               
    email:new FormControl(''),                    
    medicalInfo:new FormControl(''),              
    profilePicture:new FormControl('')
    
  })

  get currentPatients(): Patients {
    const patient = this.patientForm.value as Patients;
    return patient;
  }

  ngOnInit(): void {
      if(!this.router.url.includes('edit'))return;
      this.activateRouter.params
      .pipe(
        switchMap(({id}) => this.patientsService.getPatientsById(id))
      ).subscribe( patients => {
        if(!patients) return this.router.navigateByUrl('/list');
        this.patientForm.reset( patients as Object);
        return;
      })
  }

  onSubmit():void{
    if(this.patientForm.invalid) return;

    if(this.currentPatients.id){
      this.patientsService.updatePatient(this.currentPatients)
      .subscribe( patients => {
        this.showSnackbar(`${patients.firstName} updated!`)
      });
      return
    }

    this.patientsService.addPatient(this.currentPatients)
    .subscribe( patients => {
        this.router.navigate(['/patient/list',patients.id]);
        this.showSnackbar(`${patients.firstName} created!`);
    })
  }

  showSnackbar(message: string):void {
    this.snackBar.open(message, 'done',{
      duration:2500,
    });
  }
 
}
 