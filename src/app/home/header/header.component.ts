import { Component, OnInit } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    PageScrollConfig.defaultDuration = 250;
  }

  ngOnInit() {
  }

}
