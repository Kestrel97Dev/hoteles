import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RoomsService } from '../../services/rooms.service';
import { Category } from 'src/app/categories/interfaces/category';
import { switchMap } from 'rxjs';
import { Room } from '../../interfaces/room';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {

  isSubmitting = false; // Flag para prevenir múltiples envíos
  categories: Category[] = []; // Lista de categorías

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private roomsService: RoomsService,
    private snackBar: MatSnackBar
  ) { }
  public roomForm = new FormGroup({
    id: new FormControl<number | null>(null),
    number: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    category: new FormControl<Category | null>(null, { validators: [Validators.required] }),
    floor: new FormControl<number>(0, { validators: [Validators.required] }),
    quota: new FormControl<number>(0, { validators: [Validators.required] }),
    cost: new FormControl<number>(0, { validators: [Validators.required] }),
    details: new FormControl<string>(''),
    vacant: new FormControl<boolean>(true)
  });

  get currentRoom(): Room {
    const room = this.roomForm.value;
    return {
      ...room,
      id: room?.id ? Number(room.id) : null,
    } as Room;
  }

  loadCategories(): void {
    // Aquí iría el método para cargar las categorías
    // Por ahora se asume que las categorías se cargan de alguna API
    this.categories = [
      {
        id: 1,
        name: "Habitación Estándar",
        description: "Habitación sencilla con baño privado y WiFi"
      },
      {
        id: 2,
        name: "Suite Ejecutiva",
        description: "Habitación de lujo con sala de estar y vistas al mar"
      },
      {
        id: 3,
        name: "Habitación Doble",
        description: "Habitación con dos camas individuales y baño privado"
      }
    ];
  }

  ngOnInit(): void {
    // Aquí cargarías las categorías disponibles (por ejemplo desde un servicio)
    this.loadCategories();

    if (!this.router.url.includes('edit')) return;
    this.activateRouter.params
      .pipe(
        switchMap(({ id }) => this.roomsService.getRoomById(id))
      ).subscribe(room => {
        if (!room) return this.router.navigateByUrl('/list');
        this.roomForm.reset(room as Object);
        return;
      })
  }

  onSubmit(): void {
    if (this.isSubmitting) return; // Evita ejecutar si ya está procesando
    this.isSubmitting = true;

    if (this.roomForm.invalid) {
      this.showSnackbar('Por favor completa los campos obligatorios');
      this.isSubmitting = false;
      return;
    }

    if (this.currentRoom.id) {
      this.roomsService.updateRooms(this.currentRoom)
        .subscribe({
          next: room => {
            this.router.navigate(['/rooms/list']);
            this.showSnackbar(`${room.number} updated!`);
          },
          complete: () => this.isSubmitting = false
        });
      return;
    }

    this.roomsService.addRooms(this.currentRoom)
      .subscribe({
        next: room => {
          this.router.navigate(['/rooms/list']);
          this.showSnackbar(`${room.number} created!`);
        },
        complete: () => this.isSubmitting = false
      });
  }

  showSnackbar(message: string): void {
    this.snackBar.open(message, 'done', {
      duration: 2500,
    });
  }
}
