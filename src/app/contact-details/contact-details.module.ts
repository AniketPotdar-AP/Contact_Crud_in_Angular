import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ContactDetailsRoutingModule } from './contact-details-routing.module';
import { ContactDetailsComponent } from './contact-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactDetailsComponent],
  imports: [
    CommonModule,
    ContactDetailsRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class ContactDetailsModule { }
