import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateContactRoutingModule } from './create-contact-routing.module';
import { CreateContactComponent } from './create-contact.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateContactComponent
  ],
  imports: [
    CommonModule,
    CreateContactRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class CreateContactModule { }
