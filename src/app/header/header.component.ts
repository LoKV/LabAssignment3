import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  firstName: string;
  lastName: string;
 constructor() {
     this.firstName = 'Victor';
     this.lastName = 'Lo';
 }

 showGreeting() {
     const row2 = document.getElementById('r1c2');
     console.log('row2', row2, 'document', document);
     row2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName;
 }

 resetGreeting() {
     const row2 = document.getElementById('r1c2');
     row2.innerHTML = 'r1c2';
 }
  ngOnInit() {
  }

}
