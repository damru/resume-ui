import { Injectable } from '@angular/core';
import { SkillCategory } from './skill-category';
import { Skill } from './skill';
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
