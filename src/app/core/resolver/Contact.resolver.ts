import { Injectable } from '@angular/core';
import { ContactsService } from '../service/contacts.service';

import { Resolve } from '@angular/router';

@Injectable()
export class ContactResolver implements Resolve<any> {
  constructor(private service: ContactsService) {}

  resolve() {
    return this.service.getContact();
  }
}
