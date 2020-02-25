import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {  InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from './shared/inmemory-db/inmemory-db.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(FakeBackendService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
