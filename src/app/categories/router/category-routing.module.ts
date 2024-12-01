import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from '../pages/category-list/category-list.component';
import { CategoryFormComponent } from '../pages/category-form/category-form.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: CategoryListComponent },
      { path: 'add', component: CategoryFormComponent },
      { path: 'edit/:id', component: CategoryFormComponent },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
