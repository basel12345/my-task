import { Injectable } from '@angular/core';
import { ContactsService } from '../service/contacts.service';

import { Resolve } from '@angular/router';

@Injectable()
export class LastestContactResolver implements Resolve<any> {
  constructor(private service: ContactsService) {}

  resolve() {
    return this.service.getLastestContact();
  }
}
