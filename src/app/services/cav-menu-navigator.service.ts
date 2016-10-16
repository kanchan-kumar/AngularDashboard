import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class CavMenuNavigatorService {

  constructor() { }

  /*Observable string sources.*/
  private toggleNavMenuService = new Subject<string>();

  /*Service message commands.*/
  toggleNavMenuAction(value: string) {

    /*Observable string streams.*/
    this.toggleNavMenuService.next(value);
  }

   /*Service Observable for getting Menu Toggle Action.*/
   toggleMenuProvider$ =  this.toggleNavMenuService.asObservable();

}
