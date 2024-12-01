import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryFormComponent } from './pages/category-form/category-form.component';
import { CategoryRoutingModule } from './router/category-routing.module';

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    
    CategoryRoutingModule,
  ]
})
export class CaterotysModule { }
