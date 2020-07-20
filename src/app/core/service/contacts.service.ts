import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  Contact: any;

  constructor(private http: HttpClient) { }

  getLastestContact() {
    return this.http.get(`assets/recent-contact.json`);
  }

  getContact() {
    return this.http.get(`assets/contacts.json`);
  }

  addContact(contact) {
    this.Contact = contact;
  }

  getNewContact() {
    return this.Contact;
  }
}
