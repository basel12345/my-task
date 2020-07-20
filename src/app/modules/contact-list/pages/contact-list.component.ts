import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from 'src/app/core/service/contacts.service';

@Component({
  selector: 'contact-list-root',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, DoCheck {
  LastestContact: any;
  Contact: any;
  placeholderImage: string = "assets/images/1200px-Placeholder_no_text.svg.png";
  groupedData = {};
  searchText = '';
  disappearIcon: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router, private service: ContactsService) {}
  ngOnInit() {
    this.route.data.subscribe(res => {
      this.LastestContact = res['LastestContact']["data"];
      this.Contact = res['Contact']["data"];
    });
    this.getContacts();
    this.getNewContact();
  }

  ngDoCheck() {
    if (this.searchText.length > 0) {
      this.disappearIcon = true;
    } else {
      this.disappearIcon = false;
    }
  }

  // for sort data and add in groups
  getContacts() {
    const sortedData = this.Contact.sort();
    // tslint:disable-next-line: forin
    for (let i in sortedData) {
      const firstLetter = sortedData[i]["firstName"].charAt(0);
      if (this.groupedData[firstLetter] == undefined) {
        this.groupedData[firstLetter] = [];
      }
      this.groupedData[firstLetter].push(sortedData[i]);
    }
  }

  // get data from form
  // If a name is added with a letter that does not exist, the letter will be added with the scroll letters
  getNewContact() {
    this.Contact.push(this.service.getNewContact())
    if(this.service.getNewContact()) {
      const sortedData = this.Contact.sort();
      // tslint:disable-next-line: forin
      for (let i in sortedData) {
        const firstLetter = sortedData[i]["firstName"].charAt(0);
        if (this.groupedData[firstLetter] == undefined) {
          this.groupedData[firstLetter] = [];
        }
        this.groupedData[firstLetter].push(sortedData[i]);
      }
    }
  }

// scroll by letter
scroll(el: HTMLElement) {
  const elmnt = document.getElementById(`${el}`);
  elmnt.scrollIntoView({behavior: 'smooth'});
}

  addContact() {
    this.router.navigate(["./contact-list/add-contact"]);
  }
}
