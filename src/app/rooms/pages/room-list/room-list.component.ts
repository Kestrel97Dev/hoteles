import { Component, OnInit } from '@angular/core';
import { Room } from '../../interfaces/room';
import { RoomsService } from '../../services/rooms.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: Room [] = [];
  displayedColumns: string[] = [
    'Numero',
    'Categoria',
    'Capacidad',
    'Costo',
    'Detalle',
    'Disponibilidad',
    'Acciones'
  ];

  constructor(
    private roomsService: RoomsService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
  this.loadRooms();
  }

  loadRooms(): void {
    this.roomsService.getAllRooms()
    .subscribe(rooms => this.rooms = rooms);
  }

  hayRegistros() {
    return this.rooms.length > 0;
  }

  // Método para eliminar un paciente
  deleteRoom(room: Room): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: room, 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.roomsService.deleteRooms(room.id).subscribe(() => {
          this.showSnackbar('habitacion eliminada correctamente.');
          this.loadRooms(); 
        });
      }
    });
  }

  showSnackbar(message: string): void {
    this.snackBar.open(message, 'Cerrar', { duration: 3000 });
  }

}
