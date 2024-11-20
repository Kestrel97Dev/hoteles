import { Category } from "src/app/categories/interfaces/category";

export interface Room {
  id: number;             // ID único de la habitación
  category: Category;     // Categoría de la habitación
  number: string;         // Número de la habitación
  floor: number;          // Piso donde se encuentra la habitación
  quota: number;          // Capacidad de la habitación
  cost: number;           // Costo por noche o uso
  details: string;        // Detalles adicionales de la habitación
  vacant: boolean;        // Indica si la habitación está disponible
}
