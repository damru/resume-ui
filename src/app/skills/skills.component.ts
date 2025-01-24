import { Component, OnInit } from '@angular/core';
import { Skill } from './skill';
import { SkillCategory } from './skill-category';
import { SkillService } from './skill.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skillCategories: SkillCategory[];
  skills: Skill[] = [];

  constructor(private skillService: SkillService) { 
    this.skillCategories = this.skillService.getSkillCategories();
    this.skillCategories = this.skillCategories.sort((a, b) => a.order - b.order)
    this.skills = this.skillService.getSkills();
    this.skills = this.skills.sort((a, b) => a.order - b.order)
  }

}
