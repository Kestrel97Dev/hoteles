import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';
import { CategoryService } from '../../services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from 'src/app/shared/services/confirm-dialog.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];
  displayedColumns: string[] = [
    'ID',
    'Nombre',
    'Descripción',
    'Acciones'
  ];

  constructor(
    private categoryService: CategoryService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private confirmDialogService: ConfirmDialogService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAllCategories()
      .subscribe(categories => this.categories = categories);
  }

  hayRegistros(): boolean {
    return this.categories.length > 0;
  }

  deleteCategory(category: Category): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: category,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoryService.deleteCategory(category.id).subscribe(() => {
          this.showSnackbar('Categoría eliminada correctamente.');
          this.loadCategories();
        });
      }
    });
  }

  showSnackbar(message: string): void {
    this.snackBar.open(message, 'Cerrar', { duration: 3000 });
  }

}
