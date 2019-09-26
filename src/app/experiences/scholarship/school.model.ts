import { Experience } from '../experience.model';

export class School implements Experience {

    id: number;
    startDate: string;
    endDate: string;
    location: string;

    diploma: string;
    diploma_ca: string;

    school: string;
    major: string;
    major_fr: string;
    minor: string;
    minor_fr: string;

}
