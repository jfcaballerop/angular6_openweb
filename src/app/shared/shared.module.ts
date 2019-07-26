import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialFormsModule } from './material-forms/material-forms.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialFormsModule
  ],
  exports: [
    MaterialFormsModule
  ]
})
export class SharedModule { }
