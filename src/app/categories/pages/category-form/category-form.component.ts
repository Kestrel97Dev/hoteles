import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from '../../interfaces/category';
import { switchMap } from 'rxjs';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  isSubmitting = false;

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private categoryServuce: CategoryService,
    private snackBar: MatSnackBar
  ) { }

  public categoryForm = new FormGroup({
    id: new FormControl<number | null>(null),
    name: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    description: new FormControl<string>(''),
  });

  get currentCategory(): Category {
    const category = this.categoryForm.value;
    return {
      ...category,
      id: category?.id ? Number(category.id) : null,
    } as Category;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;
    this.activateRouter.params
      .pipe(
        switchMap(({ id }) => this.categoryServuce.getCategoryById(id))
      ).subscribe(category => {
        if (!category) return this.router.navigateByUrl('/categories/list');
        this.categoryForm.reset(category as Object);
        return;
      });
  }

  onSubmit(): void {
    if (this.isSubmitting) return;
    this.isSubmitting = true;

    if (this.categoryForm.invalid) {
      this.showSnackbar('Por favor completa los campos obligatorios');
      this.isSubmitting = false;
      return;
    }

    if (this.currentCategory.id) {
      this.categoryServuce.updateCategory(this.currentCategory)
        .subscribe({
          next: category => {
            this.router.navigate(['/category/list']);
            this.showSnackbar(`Categoría "${category.name}" actualizada!`);
          },
          complete: () => this.isSubmitting = false
        });
      return;
    }

    this.categoryServuce.addCategory(this.currentCategory)
      .subscribe({
        next: category => {
          this.router.navigate(['/category/list']);
          this.showSnackbar(`Categoría "${category.name}" creada!`);
        },
        complete: () => this.isSubmitting = false
      });
  }

  showSnackbar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 2500,
    });
  }
}
