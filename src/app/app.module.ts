import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './shared/app-navbar/app-navbar.component';
import { BannerComponent } from './layout/banner/banner.component';
import { SkillcardComponent } from './shared/skillcard/skillcard.component';
import { SkillsComponent } from './layout/skills/skills.component';
import { ProgrammingSvgComponent } from './shared/svg/programming-svg/programming-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    BannerComponent,
    SkillcardComponent,
    SkillsComponent,
    ProgrammingSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
