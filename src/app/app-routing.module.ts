import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-page/home/home.component';
import { SkillsComponent } from './components/skills-page/skills/skills.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
