import { Experience } from '../experience.model';

export class Job implements Experience {

    id: number;
    startDate: string;
    endDate: string;
    location: string;
    company: string;
    tasks: string[];
    tasks_fr: string[];
    skills: string[];

}
