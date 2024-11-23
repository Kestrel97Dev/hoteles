import { Component, OnInit } from '@angular/core';
import { Room } from '../../interfaces/room';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: Room [] = [];
  displayedColumns: string[] = [
    'number',
    'category',
    'quota',
    'cost',
    'details',
    'vacant',
    'actions'
  ];

  constructor(private roomsService: RoomsService) {}

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

}
