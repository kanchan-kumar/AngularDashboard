/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CavMenuNavigatorService } from './cav-menu-navigator.service';

describe('Service: MenuNavigator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CavMenuNavigatorService]
    });
  });

  it('should ...', inject([CavMenuNavigatorService], (service: CavMenuNavigatorService) => {
    expect(service).toBeTruthy();
  }));
});
