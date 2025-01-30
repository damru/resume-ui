import { School } from './school.model';

let i = 0;
export const SCHOOLS: School[] = [
    {
        id: i++, startDate: '2009', endDate: '2012', location: 'Paris, France',
        diploma: 'Diplôme d\'Ingénieur',
        diploma_ca: 'Master of Science in Computer Engineering',
        school: 'ECE Paris École d’Ingénieurs',
        major: 'Information Technologies',
        minor: 'Audiovisual & Multimedia'
    },
    {
        id: i++, startDate: '2011', endDate: '2011', location: 'Paris, France',
        diploma: 'Diplôme d\'Ingénieur',
        diploma_ca: 'Master of Science in Computer Engineering',
        school: 'Concordia University ',
        major: '',
        minor: 'Computer Science'
    },
    {
        id: i++, startDate: '2007', endDate: '2009', location: 'Montreuil, France',
        diploma: 'Diplôme Universitaire de Technologie (DUT) Informatique',
        diploma_ca: 'Bachelor of Science in Computer Engineering',
        school: 'IUT de Montreuil Université Paris 8',
        major: 'Software Development',
        minor: 'Software Development'
    },
    {
        id: i++, startDate: '2008', endDate: '2008', location: 'Wrexham, Wales',
        diploma: 'Diplôme Universitaire de Technologie (DUT) Informatique',
        diploma_ca: 'Bachelor of Science in Computer Engineering',
        school: 'Wrexham Glyndwr University',
        major: 'Applied Computing',
        minor: ''
    },
    {
        id: i++, startDate: '2004', endDate: '2007', location: 'Paris, France',
        diploma: 'Diplôme d\'Etudes Universitaires Générales (DEUG) d\'Admistration Economique et Sociale',
        diploma_ca: 'Bachelor of Social sciences and Economics',
        school: 'Université Paris 1 Panthéon-Sorbonne',
        major: '',
        minor: ''
    },
    {
        id: i++, startDate: '2001', endDate: '2004', location: 'Ivry-sur-Seine, France',
        diploma: 'Baccalauréat Economique et Social',
        diploma_ca: 'French High-School diploma in Economics And Social Science',
        school: 'Lycée Romain Rolland',
        major: 'Economics',
        minor: ''
    }
];
