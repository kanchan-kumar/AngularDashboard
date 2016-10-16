import {Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-cav-menu',
  templateUrl: './cav-menu.component.html',
  styleUrls: ['./cav-menu.component.css']
})
export class CavMenuComponent implements OnInit {

  @Input() navMenu:Object = [];
  @Input() sidebarCollapsed:boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
