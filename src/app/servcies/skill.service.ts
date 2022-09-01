import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
;

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  readonly url = 'https://uttoturialsapi.azurewebsites.net/api/Skill';

  constructor(private http: HttpClient) { }

  getSkills(){
    return this.http.get<Skill[]>(this.url);
  }
  
}
