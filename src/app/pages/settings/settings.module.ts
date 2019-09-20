import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { AreasComponent } from './areas/areas.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { CategoriesComponent } from './categories/categories.component';
import { SectionsComponent } from './sections/sections.component';


@NgModule({
  declarations: [AreasComponent, BooksComponent, AuthorsComponent, CategoriesComponent, SectionsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
