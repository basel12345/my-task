import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/core/service/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-contact-root',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  Contact = {
    firstName: null,
    lastName: null,
    image: null,
    mobileNumber: null,
    number: null,
    email: null,
    fileToUpload: null,
    code: null,
  };

  constructor(private service: ContactsService, private router: Router) {}
  ngOnInit() {
    // Placeholder image
    this.Contact.image = "assets/images/1200px-Placeholder_no_text.svg.png";
  }

  // Upload image
  hanedlFileInput(fileInput: any){
    this.Contact.fileToUpload = fileInput.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
    this.Contact.image = reader.result;
    };
    reader.readAsDataURL(this.Contact.fileToUpload);
  }

  // Submit form
  onSubmit(form) {
    this.Contact.mobileNumber = this.Contact.code + this.Contact.number;
    this.service.addContact(this.Contact);
    this.router.navigate(["../pages"]);
  }

  // Cancel adding
  cancael() {
    this.router.navigate(["../pages"]);
  }
}
