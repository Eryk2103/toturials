import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skill: Skill = <Skill>{}; 

  constructor() { }
  
  ngOnInit(): void {
    
  }
  generateStars(num: number){
    let str = "";
    for(let i=0; i<num; i++)
    {
        str+= "&#9733; ";
    }
    for(let i=0; i<5-num; i++)
    {
        str+= "&#9734;";
    }
    return str.slice(0, -1);
  }
}
