import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CavMenuNavigatorService } from '../../services/cav-menu-navigator.service';

@Component({
  selector: 'app-cav-nav-bar',
  templateUrl: './cav-nav-bar.component.html',
  styleUrls: ['cav-nav-bar.component.scss'],
})
export class CavNavBarComponent implements OnInit {

  constructor(private cavMenuNavigatorService: CavMenuNavigatorService) {
  }

  ngOnInit() {
  }

  /*Firing Event.*/
  onToggleMenuNavigation() {
    this.cavMenuNavigatorService.toggleNavMenuAction("toggle");
  }
}
