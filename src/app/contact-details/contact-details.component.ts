import { ContactService } from './../services/contact.service';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent {
  contactForm: FormGroup;
  data: any;
  id: any;

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private modalService: NgbModal
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNo: new FormControl('', [Validators.required]),
    });
  }

  /*=======================================================
                   Get Contact Data by ID
  =======================================================*/

  getContactById() {
    this.contactService.getContactById(this.id).subscribe((data) => {
      this.data = data;
      this.contactForm.patchValue({
        firstName: this.data?.firstName,
        lastName: this.data?.lastName,
        phoneNo: this.data?.phoneNo,
      });
    });
  }

  /*=======================================================
                     Update Contact
  =======================================================*/

  updateContact() {
    this.contactService.updateContacts(
      this.id,
      this.contactForm.value.firstName,
      this.contactForm.value.lastName,
      this.contactForm.value.phoneNo
    );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getContactById();
  }

  logout() {
    this.authService.logout();
  }

  get f() {
    return this.contactForm.controls;
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

}
