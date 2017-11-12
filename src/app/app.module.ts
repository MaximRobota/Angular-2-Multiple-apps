import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { App1Component } from './app.component1';
import { App2Component } from './app.component2';
import {  DOCUMENT } from '@angular/platform-browser';
import { Inject } from '@angular/core';


@NgModule({
  declarations: [
    App1Component,
    App2Component
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [],
  entryComponents: [App1Component, App2Component]
})
export class AppModule {
  private browser_document;
  ngDoBootstrap(appRef) {
    if (this.browser_document.getElementsByTagName('app-root1').length > 0) {appRef.bootstrap(App1Component); }
    if (this.browser_document.getElementsByTagName('app-root2').length > 0) {appRef.bootstrap(App2Component); }
  }
  constructor(@Inject(DOCUMENT) private document: any) {
    this.browser_document = document;
  }
}
