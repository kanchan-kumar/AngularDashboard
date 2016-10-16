import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import {CavMenuNavigatorService} from "../../services/cav-menu-navigator.service";
import {MdSidenav} from "@angular/material";

@Component({
  selector: 'app-cav-main-menu-navignation',
  templateUrl: './cav-main-menu-navignation.component.html',
  styleUrls: ['cav-main-menu-navignation.component.scss']
})
export class CavMainMenuNavignationComponent implements OnInit {

  value = "Nothing";
  subscription: Subscription;
  @ViewChild('menuNavSide') menuSideNav:MdSidenav;
  navWidth = "40px";

  constructor(private cavMenuNavigatorService: CavMenuNavigatorService) {
    this.subscription = cavMenuNavigatorService.toggleMenuProvider$.subscribe(

      /*Getting Event Here.*/
      value => {
        this.value = value;
        this.menuSideNav.toggle();
      }
    );
  }

  ngOnInit() {
  }

  navMenuFocus() {
    this.navWidth = "150px";
  }

  navMenuFocusOut() {
    this.navWidth = "40px";
  }
}
