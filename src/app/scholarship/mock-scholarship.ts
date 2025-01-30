import { Scholarship } from './scholarship.model';
import { School } from './school.model';

let i = 0;
export const SCHOLARSHIPS: Scholarship[] = [
    {
        id: i++, startDate: '2009', endDate: '2012', locations: [],
        diploma: 'Diplôme d\'Ingénieur',
        diploma_ca: 'Master of Science in Computer Engineering',
        schools: [
            {
                name: 'ECE Paris École d’Ingénieurs',
                period: '',
                location: 'Paris, France',
                major: 'Information Technologies',
                minor: 'Audiovisual & Multimedia'
            },
            {
                name: 'Concordia University',
                period: '2011 (sept. - dec.)',
                location: 'Montreal, QC, Canada',
                major: 'Computer Science',
                minor: ''
            }
        ]
    },
    {
        id: i++, startDate: '2007', endDate: '2009', locations: [],
        diploma: 'Diplôme Universitaire de Technologie (DUT) Informatique',
        diploma_ca: 'Bachelor of Science in Computer Engineering',
        schools: [
            {
                name: 'IUT de Montreuil Université Paris 8',
                period: '',
                location: 'Montreuil, France',
                major: 'Software Development',
                minor: 'Software Development'
            },
            {
                name: 'Wrexham Glyndwr University',
                period: '2008 (june - aug.)',
                location: 'Wrexham, Wales, UK',
                major: 'Computer Science',
                minor: 'Applied Computing'
            }
        ]
    },
    {
        id: i++, startDate: '2004', endDate: '2007', locations: [],
        diploma: 'Diplôme d\'Etudes Universitaires Générales (DEUG) d\'Admistration Economique et Sociale',
        diploma_ca: 'Bachelor of Social sciences and Economics',
        schools: [
            {
                name: 'Université Paris 1 Panthéon-Sorbonne',
                period: '',
                location: 'Paris, France',
                major: 'Economics',
                minor: ''
            }
        ]
    },
    {
        id: i++, startDate: '2001', endDate: '2004', locations: [],
        diploma: 'Baccalauréat Economique et Social',
        diploma_ca: 'French High-School diploma in Economics And Social Science',
        schools: [
            {
                name: 'Lycée Romain Rolland',
                period: '',
                location: 'Ivry-sur-Seine, France',
                major: 'Economics',
                minor: ''
            }
        ]
    }
];
