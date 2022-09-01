import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Skill } from 'src/app/models/skill';


@Component({
  selector: 'app-filter-skills',
  templateUrl: './filter-skills.component.html',
  styleUrls: ['./filter-skills.component.css']
})
export class FilterSkillsComponent implements OnInit {

  @Input() skills : Skill[] = [];
  @Output() filteredSkills = new EventEmitter<Skill[]>();

  filter = new FormGroup({
    stars: new FormControl(''),
    search: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    let skills = this.skills;
    let stars = this.filter.get('stars')?.value;
    let search = this.filter.get('search')?.value.toLowerCase();
    skills.forEach( skill => { skill.name = skill.name.toLowerCase()});
    skills = skills.filter((skill) => { return ((stars=='') ? true : skill.stars == stars) && (skill.name.includes(search));});
    this.filteredSkills.emit(skills);  }

}
