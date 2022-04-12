import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputDateComponent } from './input-date/input-text.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputTextAreaComponent } from './input-textarea/input-textarea.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputTextComponent,
    InputDateComponent,
    InputNumberComponent,
    InputSelectComponent,
    InputTextAreaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  exports: [InputTextComponent,
    InputDateComponent,
    InputNumberComponent,
    InputSelectComponent,
    InputTextAreaComponent]
})
export class CamposModule { }
