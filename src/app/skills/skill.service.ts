import { Injectable } from '@angular/core';
import { SkillCategory } from './skill-category.model';
import { Skill } from './skill.model';
import { SKILL_CATEGORIES } from './mock-skills';
import { SKILLS } from './mock-skills';

@Injectable({
    providedIn: 'root'
})
export class SkillService {

    constructor() { }

    getSkills(): Skill[] {
        return SKILLS;
    }
    getSkillCategories(): SkillCategory[] {
        return SKILL_CATEGORIES;
    }
}
