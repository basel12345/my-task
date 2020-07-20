import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './pages/contact-list.component';
import { LastestContactResolver } from 'src/app/core/resolver/LastestContact.resolver';
import { ContactResolver } from 'src/app/core/resolver/Contact.resolver';
import { AddContactComponent } from './add-contact/add-contact.component';


const routes: Routes = [
  {
    path: '',
    component: ContactListComponent,
    resolve: {
      LastestContact: LastestContactResolver,
      Contact: ContactResolver
    }
  },
  {
    path: 'add-contact',
    component: AddContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactListRoutingModule { }
