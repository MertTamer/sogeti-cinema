import { Component, OnInit } from '@angular/core';
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  faStar = faStar;

  constructor() { }

  ngOnInit() {
  }

}
