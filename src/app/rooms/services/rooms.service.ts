import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environmenst } from '../../../environments/environments';
import { Room } from '../interfaces/room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private url: string = environmenst.baseUrl+'/rooms';

  constructor(private http: HttpClient) { }

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.url}`);
  }

  getRoomById(id:string):Observable <Room|undefined>{
    return this.http.get<Room>(`${this.url}/${id}`)
      .pipe(
          catchError( error => of(undefined) )
      );
  }

  addRooms(room: Room): Observable<Room> {
    return this.http.post<Room>(`${this.url}`, room);
  }

  updateRooms(room: Room): Observable<Room> {
    if (!room.id) throw Error('Rooms id is required')
    return this.http.put<Room>(`${this.url}/${room.id}`, room);
  }

  deleteRooms(id: number): Observable<boolean> {
    return this.http.delete(`${this.url}/${id}`)
      .pipe(
        map(resp => true),
        catchError(err => of(false)),
      );
  }


}
