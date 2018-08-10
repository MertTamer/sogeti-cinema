import { Component, OnInit } from '@angular/core';
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faSearch = faSearch;
  faStar = faStar;
  
  constructor() { }

  ngOnInit() {
  }

}
