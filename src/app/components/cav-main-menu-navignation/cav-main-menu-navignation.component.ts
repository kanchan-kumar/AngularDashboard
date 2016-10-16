import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import {CavMenuNavigatorService} from "../../services/cav-menu-navigator.service";
import {MdSidenav} from "@angular/material";
import {Logger} from "angular2-logger/core";
import {MenuNavigationDef} from "../../constants/menu-navigation-def";

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
  isOpenMode = true;
  isCollapsed = true;
  arrNavMenu = [];

  constructor(private cavMenuNavigatorService: CavMenuNavigatorService, private log: Logger) {

    /*Listening Event.*/
    this.subscription = cavMenuNavigatorService.toggleMenuProvider$.subscribe(

      /*Getting Event Here.*/
      value => {
        this.value = value;
        this.log.info("Opening/Closing Navigation Menu.");
        this.menuSideNav.toggle();
      }
    );
  }

  /*Initialization of component.*/
  ngOnInit() {
    this.arrNavMenu = new MenuNavigationDef().NAVIGATION_MENU;
  }

  navMenuFocus() {
    this.navWidth = "150px";
    this.isCollapsed = false;
  }

  navMenuFocusOut() {
    this.navWidth = "40px";
    this.isCollapsed = true;
  }
}
