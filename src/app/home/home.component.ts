import { Component, NgModule } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ContactService } from '../services/contact.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  contact: any;
  data = false;
  searchText = false;
  searchQuery: string = '';
  filteredData: any[] = [];

  performSearch() {
    this.searchText = true;
    this.filteredData = this.contact.filter((item: { firstName: string, lastName: string, phoneNo: string }) =>
      item.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      item.lastName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      item.phoneNo.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    if (this.searchQuery === "") {
      this.searchText = false;
    }
  }

  constructor(
    private contactService: ContactService,
    private authService: AuthService,
    private modalService: NgbModal
  ) {
    this.getContacts()
  }

  /*=======================================================
                    Get Contacts
  =======================================================*/

  getContacts() {
    this.contactService.getContacts().subscribe((response) => {
      this.contact = response;
      if (response.length != 0) {
        this.data = true;
      } else {
        this.data = false;
      }
    });
  }

  /*=======================================================
                    Delete Contact
  =======================================================*/

  deleteContact(id: any) {
    this.contactService.deleteContact(id).subscribe(() => {
      this.getContacts()
    });
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  logout() {
    this.authService.logout();
  }

}
