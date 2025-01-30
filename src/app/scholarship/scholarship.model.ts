import { Experience } from '../experiences/experience.model';
import { School } from './school.model';

export class Scholarship implements Experience {

    id!: number;
    startDate!: string;
    endDate!: string;
    locations!: string[];
    diploma!: string;
    diploma_ca!: string;
    schools!: School[];
    
}
