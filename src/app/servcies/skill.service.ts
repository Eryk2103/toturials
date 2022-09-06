import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
;

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  readonly url = 'http://13.37.212.133:8080/skills';

  constructor(private http: HttpClient) { }

  getSkills(){
    return this.http.get<Skill[]>(this.url);
  }
  
}
