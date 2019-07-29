import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { DropdowntoggleDirective } from './dropdowntoggle.directive';
import { MaterialFormsModule } from './material-forms/material-forms.module';
import { CelsiusPipe } from './pipes/celsius.pipe';



@NgModule({
  declarations: [DropdownDirective, DropdowntoggleDirective, CelsiusPipe],
  imports: [
    CommonModule,
    MaterialFormsModule
  ],
  exports: [
    MaterialFormsModule,
    DropdownDirective,
    DropdowntoggleDirective,
    CelsiusPipe
  ]
})
export class SharedModule { }
