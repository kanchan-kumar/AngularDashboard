import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import {CavMenuNavigatorService} from "../../services/cav-menu-navigator.service";
import {MdSidenav} from "@angular/material";

@Component({
  selector: 'app-cav-main',
  templateUrl: 'cav-main-component.html',
  styleUrls: ['cav-main-component.scss'],
})
export class CavMainComponent implements OnInit {

  ngOnInit() {
  }

}
