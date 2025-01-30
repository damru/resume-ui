import { Experience } from '../experiences/experience.model';

export class Job implements Experience {

    id!: number;
    startDate!: string;
    endDate!: string;
    locations!: string[];
    company!: string;
    title!: string;
    tasks!: string[];
    skills!: string[];

}
