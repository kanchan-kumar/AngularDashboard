import { BrowserModule } from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '@angular/material';
import {APP_ROUTES} from './components/cav-content/routes';
import { Logger, Options as LoggerOptions, Level as LoggerLevel } from "angular2-logger/core";

import { AppComponent } from './app.component';
import { CavNavBarComponent } from './components/cav-nav-bar/cav-nav-bar.component';
import { CavMainComponent } from './components/cav-main/cav-main-component';
import { CavProfileGraphViewComponent } from './components/cav-profile-graph-view/cav-profile-graph-view.component';
import { CavContentComponent } from './components/cav-content/cav-content.component';
import { CavMainMenuNavignationComponent } from './components/cav-main-menu-navignation/cav-main-menu-navignation.component';
import { CavMenuNavigatorService } from './services/cav-menu-navigator.service';

@NgModule({
  declarations: [
    AppComponent,
    CavNavBarComponent,
    CavMainComponent,
    CavProfileGraphViewComponent,
    CavContentComponent,
    CavMainMenuNavignationComponent,
  ],
  entryComponents: [
    AppComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    MaterialModule.forRoot(),
  ],
  providers: [
    CavMenuNavigatorService,
    { provide: LoggerOptions, useValue: { level: LoggerLevel.INFO } },
    Logger,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(AppComponent);
  }
}
