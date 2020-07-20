import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactListRoutingModule } from './contact-list-routing.module';
import { FormsModule } from '@angular/forms';

import { ContactListComponent } from './pages/contact-list.component';
import { LastestContactResolver } from 'src/app/core/resolver/LastestContact.resolver';
import { ContactResolver } from 'src/app/core/resolver/Contact.resolver';
import { AddContactComponent } from './add-contact/add-contact.component';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { MobileNumberDirective } from 'src/app/shared/directive/mobileNumber.directive';


@NgModule({
  declarations: [
    ContactListComponent,
    AddContactComponent,
    FilterPipe,
    MobileNumberDirective
  ],
  imports: [
    CommonModule,
    ContactListRoutingModule,
    FormsModule
  ],
  providers: [
    LastestContactResolver,
    ContactResolver
  ],
})
export class ContactListModule { }
