import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home-page/home/home.component';
import { SkillComponent } from './components/shared/skill/skill.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './components/skills-page/skills/skills.component';
import { FilterSkillsComponent } from './components/skills-page/filter-skills/filter-skills.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SafeUrlPipe } from './safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SkillComponent,
    SkillsComponent,
    FilterSkillsComponent,
    SafeUrlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
