import { Job } from './job.model';

let i = 0;
export const JOBS: Job[] = [

    {
        id: i++, startDate: '2017-02-01', endDate: '', location: '', company: 'Société Général CIB',
        tasks: [
            'Kickstarted a new project by creating guidelines for development, testing, build etc. in order to provide the future feature teams with strong and common basis.',
            'Designed a microservice architectured application providing many APIs to process legal contracts and provide services on them.',
            'Backend development with a TDD/BDD approach. Created integration testings and scenarios with business users and their requirements.',
            'Successfully created build pipelines in order to have a continuous integration environment and flawlessly deliver in production.',
            'Contribution to the frontend client development.'
        ],
        skills: ['Java', 'Spring', 'Spring Boot', 'OAuth2', 'Consul', 'Zuul', 'Jenkins', 'Sonar', 'Git', 'Maven', 'Docker', 'Angular', 'Python', 'BDD', 'TDD', 'DevOps'],
        tasks_fr: []
    },
    {
        id: i++, startDate: '2016-11-01', endDate: '2017-02-01', location: 'La Plaine Saint-Denis, France', company: 'Generali',
        tasks: [
            'Implemented good practices and development guidelines in order to stabilize and standardize all Java applications of the IT department (industrialization, TDD, BDD, intergration testings).',
            'Migrated an obsolete webservice from Corba to Java.'
        ],
        skills: ['J2EE', 'Anugular JS', 'Selenuim/Fluentlenium', 'Jenkins'],
        tasks_fr: []
    },
    {
        id: i++, startDate: '2016-10-01', endDate: '2016-11-01', location: 'Neuilly-sur-Seine, France', company: 'SFEIR',
        tasks: [
            'Contribution to the backend development of an application dedicated to the employees skillsets with a graph database and graphic representation.',
            'Migrated an obsolete webservice from Corba to Java.'
        ],
        skills: ['', ''],
        tasks_fr: []
    },
    {
        id: i++, startDate: '2013-02-01', endDate: '2016-10-01', location: 'Courbevoie, France', company: 'Crédit Agricole CIB',
        tasks: [
            'Designed and implemented the complete refactoring of inhouse front-to-back booking application from Struts to Spring, and from Java 5 to Java with teams in Paris and Noida (India).',
            'Completed the makeover of the CTRLM (scheduler) architecture for CACIB New-York IT Treasury department.',
            'Study and development for Treasury IT on front-to-back proprietary application Kondor+.',
            'Handled support L3 and managed offshore team in Noida (6 peoples, India).'
        ],
        skills: ['Java', 'Spring', 'Hibernate', 'jUnit' ,'SVN', 'Maven', 'JavaScript', 'Kondor+ by Misys (formerly by Reuters)',
        'Shell scripting', 'STP', 'Sybase ASE (T/SQL)', 'CTRLM', 'Team Management'],
        tasks_fr: []
    },
    {
        id: i++, startDate: '2012-05-01', endDate: '2012-11-01', location: 'Montreuil, France', company: 'BNP Paribas',
        tasks: [
            'Detailed analysis of business requirements to enhance the reporting tool of the Treasury.',
            'Development of new reports through the creation of complex stored procedures.',
            ' Optimization of the stored procedures through indexes and complex sql joins with temporary tables.'
        ],
        skills: ['SVN', 'Shell scripting', 'Sybase ASE (T/SQL)', 'C++', 'Powerbuilder'],
        tasks_fr: []
    },
    {
        id: i++, startDate: '2011-04-01', endDate: '2011-08-01', location: 'Paris, France', company: 'buzzing light',
        tasks: [
            'Backend and frontend development for the short-term jobs web and mobile platform <b>Beepjob</b>',
            'Creation of the search engine based on the user location. Enhancement of this search engine to take into account many criterias (distance, type of contract, relevance).',
            'Contribution to the design of the visual identity.'
        ],
        skills: ['PHP', 'HTML', 'CSS', 'JavaScript', 'AJAX', 'MySQL', 'Google Geolocation API'],
        tasks_fr: []
    }

];
