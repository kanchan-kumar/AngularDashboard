/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { CavMainMenuNavignationComponent } from './cav-main-menu-navignation.component';
import {CavMenuNavigatorService} from "../../services/cav-menu-navigator.service";
import {Logger} from "angular2-logger/core";

describe('Component: CavMainMenuNavignation', () => {
  it('should create an instance', () => {
    let component = new CavMainMenuNavignationComponent(CavMenuNavigatorService, Logger);
    expect(component).toBeTruthy();
  });
});
