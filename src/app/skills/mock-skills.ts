import { Skill } from './skill';
import { SkillCategory } from './skill-category';

export const SKILLS: Skill[] = [
    { name: 'API Design', levelBase100: 100, order: 0, categoryId: 1 },
    { name: 'Microservice', levelBase100: 100, order: 0, categoryId: 1 },
    { name: 'DevSecOps', levelBase100: 85, order: 0, categoryId: 1 },
    { name: 'Buildpacks', levelBase100: 85, order: 0, categoryId: 1 },
    { name: 'TDD / BDD', levelBase100: 100, order: 0, categoryId: 1 },
    { name: 'Agile / Scrum', levelBase100: 100, order: 0, categoryId: 1 },
    { name: 'UML / Merise', levelBase100: 100, order: 0, categoryId: 1 },
    //
    { name: 'Java', levelBase100: 95, order: 0, categoryId: 2 },
    { name: 'Spring / Spring Boot', levelBase100: 90, order: 0, categoryId: 2 },
    { name: 'Hibernate / JPA', levelBase100: 90, order: 0, categoryId: 2 },
    { name: 'C / C++', levelBase100: 25, order: 100, categoryId: 2 },
    { name: 'PHP', levelBase100: 70, order: 50, categoryId: 2 },
    { name: 'HTML', levelBase100: 100, order: 50, categoryId: 2 },
    { name: 'CSS', levelBase100: 90, order: 50, categoryId: 2 },
    { name: 'JavaScript', levelBase100: 75, order: 30, categoryId: 2 },
    { name: 'Angular', levelBase100: 30, order: 10, categoryId: 2 },
    { name: 'React', levelBase100: 30, order: 10, categoryId: 2 },
    { name: 'Redux', levelBase100: 30, order: 20, categoryId: 2 },
    { name: 'Bootstrap', levelBase100: 40, order: 20, categoryId: 2 },
    { name: 'Python', levelBase100: 20, order: 0, categoryId: 2 },
    { name: 'Shell Scripting', levelBase100: 80, order: 10, categoryId: 2 },
    //
    { name: 'Git / SVN', levelBase100: 90, order: 15, categoryId: 3 },
    { name: 'Github', levelBase100: 90, order: 15, categoryId: 3 },
    // { name: 'AWS', levelBase100: 20, order: 0, categoryId: 3 },
    // { name: 'Google Cloud', levelBase100: 10, order: 200, categoryId: 3 },
    { name: 'Docker', levelBase100: 80, order: 0, categoryId: 3 },
    { name: 'Jenkins', levelBase100: 90, order: 100, categoryId: 3 },
    { name: 'Maven', levelBase100: 100, order: 100, categoryId: 3 },
    { name: 'Sonar', levelBase100: 80, order: 100, categoryId: 3 },
    { name: 'CircleCI', levelBase100: 90, order: 0, categoryId: 3 },
    { name: 'Jib', levelBase100: 90, order: 0, categoryId: 3 },
    { name: 'Kaniko', levelBase100: 90, order: 0, categoryId: 3 },
    //
    // { name: 'Unix', levelBase100: 90, order: 0, categoryId: 4 },
    // { name: 'Windows', levelBase100: 90, order: 0, categoryId: 4 },
    //
    { name: 'SQL', levelBase100: 95, order: 0, categoryId: 5 },
    { name: 'MongoDB', levelBase100: 70, order: 0, categoryId: 5 }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
    { id: 1, name: 'Architecture / Methodology', name_fr: 'Architecture / Méthodologie', order: 0 },
    { id: 2, name: 'Languages / Frameworks', name_fr: 'Langages / Frameworks', order: 0 },
    { id: 3, name: 'Industrialization / Platforms', name_fr: 'Industrialisation / Plateformes', order: 0 },
    // { id: 4, name: 'OS', name_fr: 'OS', order: 10 },
    { id: 5, name: 'Databases', name_fr: 'Bases de données', order: 0 }
];
