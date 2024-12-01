import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environmenst } from '../../../environments/environments';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url: string = `${environmenst.baseUrl}/categories`;

  constructor(private http: HttpClient) { }

  // Obtener todas las categorías
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}`);
  }

  // Obtener una categoría por ID
  getCategoryById(id: string): Observable<Category | undefined> {
    return this.http.get<Category>(`${this.url}/${id}`)
      .pipe(
        catchError(error => of(undefined))
      );
  }

  // Agregar una nueva categoría
  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.url}`, category);
  }

  // Actualizar una categoría existente
  updateCategory(category: Category): Observable<Category> {
    if (!category.id) throw Error('Category ID is required');
    return this.http.put<Category>(`${this.url}/${category.id}`, category);
  }

  // Eliminar una categoría por ID
  deleteCategory(id: number): Observable<boolean> {
    return this.http.delete(`${this.url}/${id}`)
      .pipe(
        map(() => true),
        catchError(err => of(false)),
      );
  }

}
