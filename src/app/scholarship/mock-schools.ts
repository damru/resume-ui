import { School } from './school.model';

let i = 0;
export const SCHOOLS: School[] = [
    {
        id: i++, startDate: '', endDate: '', location: 'Paris, France',
        diploma: 'Diplôme d\'Ingénieur',
        diploma_ca: '5th year degree in Computer Engineering',
        school: 'ECE Paris École d’Ingénieurs',
        major: 'Information Technologies',
        minor: 'Audiovisual & Multimedia',
        major_fr: 'Technologies de l\'Information',
        minor_fr: 'Audiovisuel & Multimédia'
    },
    {
        id: i++, startDate: '', endDate: '', location: 'Paris, France',
        diploma: 'Diplôme d\'Ingénieur',
        diploma_ca: '5th year degree in Computer Engineering',
        school: 'Concordia University ',
        major: '',
        minor: 'Computer Science',
        major_fr: '',
        minor_fr: 'Computer Science'
    },
    {
        id: i++, startDate: '', endDate: '', location: 'Montreuil, France',
        diploma: 'Diplôme Universitaire de Technologie (DUT) Informatique',
        diploma_ca: '2 years technical degree in Computer Engineering',
        school: 'IUT de Montreuil Université Paris 8',
        major: 'Software Development',
        minor: 'Software Development',
        major_fr: 'Développement Logiciel',
        minor_fr: 'Développement Logiciel'
    },
    {
        id: i++, startDate: '', endDate: '', location: 'Paris, France',
        diploma: 'Diplôme d\'Etudes Universitaires Générales (DEUG) d\'Admistration Economique et Sociale',
        diploma_ca: '2 years University degree in Administration, Economics and Social Science',
        school: 'Université Paris 1 Panthéon-Sorbonne',
        major: '',
        minor: '',
        major_fr: '',
        minor_fr: ''
    },
    {
        id: i++, startDate: '', endDate: '', location: 'Ivry-sur-Seine, France',
        diploma: 'Baccalauréat Economique et Social',
        diploma_ca: 'French High-School diploma in Economics And Social Science',
        school: 'Lycée Romain Rolland',
        major: 'Economics',
        minor: '',
        major_fr: 'Economie',
        minor_fr: ''
    }
];
