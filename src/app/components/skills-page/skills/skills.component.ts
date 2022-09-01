import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/servcies/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills : Skill[] = [];
  displayed : Skill[] = [];
  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.loaddata();
  }
  loaddata(){
    this.skillService.getSkills().subscribe({
      next: (res) => { this.skills = res; this.displayed = res},
      error: (e) => { console.error(e);}
    });
  }
  filter(skills: Skill[]){
    this.displayed = skills;
  }
}
