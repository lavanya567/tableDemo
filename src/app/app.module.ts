import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';
import { CssPageComponent } from './css-page/css-page.component';
import { JavascriptPageComponent } from './javascript-page/javascript-page.component';
import { HtmlExampleComponent } from './html-example/html-example.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AbstractComponent } from './abstract/abstract.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CommitteeComponent } from './committee/committee.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { AwardComponent } from './award/award.component';
import { ProgramComponent } from './program/program.component';
import { RegisterComponent } from './register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HtmlComponent,
    CssPageComponent,
    JavascriptPageComponent,
    HtmlExampleComponent,
    AboutUsComponent,
    AbstractComponent,
    ContactUsComponent,
    CommitteeComponent,
    SpeakerComponent,
    AwardComponent,
    ProgramComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
