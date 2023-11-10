import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent {
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private authService: AuthService,
    private router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNo: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  /*=======================================================
                     Create Contact
  =======================================================*/

  createContact() {
    if (this.contactForm.invalid) {
      return;
    }

    const { firstName, lastName, phoneNo } = this.contactForm.value;

    this.contactService.createContact(firstName, lastName, phoneNo).subscribe(() => {
      this.router.navigateByUrl('/home');
      this.contactForm.reset();
      this.contactForm.markAsPristine();
      this.contactForm.markAsUntouched();
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  logout() {
    this.authService.logout();
  }
}
