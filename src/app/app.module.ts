import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { WorkSectionComponent } from './work-section/work-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProfileSectionComponent,
    WorkSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
