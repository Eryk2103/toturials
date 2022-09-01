import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/servcies/skill.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  skills : Skill[] = [];
  
  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.skillService.getSkills().subscribe( {
      next: (res) => { this.skills = res.slice(0,3);}, //select first 3, have to implement selecting logic later!!!!!!!!!!!!!
      error: (e) => { console.error(e);}
    });
  }

}
