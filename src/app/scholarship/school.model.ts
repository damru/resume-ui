import { Experience } from '../experiences/experience.model';

export class School implements Experience {

    id!: number;
    startDate!: string;
    endDate!: string;
    locations!: string[];
    diploma!: string;
    diploma_ca!: string;
    school!: string;
    major!: string;
    minor!: string;

}
