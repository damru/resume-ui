import { Job } from './job.model';

let i = 0;
export const JOBS: Job[] = [

    {
        id: i++, startDate: '2020-02-01', endDate: '', locations: ['Nantes, France'], company: 'Qlik',
        title: 'Principal Software Engineer',
        tasks: [
            '<span style="color: var(--theme-font-color-lighter)"><i># TODO</i></span>'
        ],
        skills: ['Microservices', 'CI/CD', 'Java', 'Spring Boot', 'Reactor', 'Quarkus', 'Kafka', 'Jenkins', 'Gradle', 'Docker', 'Jib', 'Kubernetes', 'Helm', 'AWS', 'Go']
    },
    {
        id: i++, startDate: '2019-02-01', endDate: '2019-09-13', locations: ['Montreal, QC, Canada'], company: 'National Bank of Canada',
        title: 'Application Architect / Technical Leader',
        tasks: [
            'As an architect, I was involved in the DevSecOps transformation. We used a buildpack approach and many tools such as CircleCI, Jib and Kaniko to create a simple yet secured, and open CI pipeline for all teams.',
            'As an architect, I also worked closely with the developers, I provided advises as well as concrete technical solutions in line with the industry and its good practices.',
            'I was also involved in the recruitment process by giving technical interviews to tens of candidates',
            'I was tech lead of the team in charge of a sensitive client-facing (couple millions of users) webapp. We delivered lots of improvements, especially dedicated to accessibility.',
            'And I also took part in the backend development and had to work on legacy microservices as well as build new ones.'
        ],
        skills: ['DevSecOps', 'Buildpacks', 'Microservices', 'CI/CD', 'Java', 'Spring', 'Spring Boot', 'Reactor', 'Kafka', 'CircleCI', 'Docker', 'Jib', 'Kaniko', 'React', 'Redux', 'GraphQL', 'MongoDB', 'Okta', 'OpenShift', 'Redis']
    },
    {
        id: i++, startDate: '2017-02-01', endDate: '2019-02-01', locations: ['Montreal, QC, Canada', 'Val de Fontenay, France'], company: 'Société Général CIB',
        title: 'Technical Leader / Senior Software Engineer',
        tasks: [
            'I kickstarted a new strategic project by creating architecture, development guidelines, CI/CD platforms etc.',
            'As the first person on this project, I had many roles such as developer, tech lead when other people joined, or architect.',
            'Everything was done in a microservice approach to provide many APIs in order to process legal contracts with some NLP and ML.',
            'The backend development was done with TDD/BDD methodology and we created integration testings and scenarios with the users.',
            'The CI/CD pipeline was done mainly with Jenkins and XLDeploy in order to have a continuous integration environment and flawlessly deliver from dev to prod.',
            'I also contributed to the frontend client development.'
        ],
        skills: ['Java', 'Spring', 'Spring Boot', 'OAuth2', 'Consul', 'Zuul', 'Jenkins', 'Sonar', 'Git', 'Maven', 'Docker', 'Angular', 'Python', 'BDD', 'TDD', 'DevOps', 'Cucumber', 'Living Documentation']
    },
    {
        id: i++, startDate: '2016-11-01', endDate: '2017-02-01', locations: ['La Plaine Saint-Denis, France'], company: 'Generali',
        title: 'Software Engineer',
        tasks: [
            'I helped create good practices and development guidelines in order to stabilize and standardize all Java applications of the IT department (CI/CD, TDD, BDD, libraries).',
            'I also migrated an obsolete webservice from Corba to Java.'
        ],
        skills: ['J2EE', 'Anugular JS', 'Selenuim/Fluentlenium', 'Jenkins']
    },
    {
        id: i++, startDate: '2016-10-01', endDate: '2016-11-01', locations: ['Neuilly-sur-Seine, France'], company: 'SFEIR',
        title: 'Software Engineer',
        tasks: [
            'I contributed to the backend development of an application dedicated to the employees skillsets with a graph database and graphic representation.'
        ],
        skills: ['Java', 'Docker', 'Spring', 'Spring Boot', 'Neo4J', 'Google Cloud (AppEngine, ComputeEngine']
    },
    {
        id: i++, startDate: '2013-02-01', endDate: '2016-10-01', locations: ['Courbevoie, France'], company: 'Crédit Agricole CIB',
        title: 'Software Engineer',
        tasks: [
            'I designed and implemented the complete refactoring of an inhouse front-to-back booking application from Struts to Spring, and from Java 5 to Java 8 with teams in Paris and Noida (India).',
            'I did the full makeover of the CTRLM (scheduler) architecture for New-York IT Treasury department.',
            'I also developed functionalities on front-to-back proprietary application Kondor+, handled support L3 and managed an offshore team of 6 peoples in Noida.'
        ],
        skills: ['Java', 'Spring', 'Hibernate', 'jUnit', 'SVN', 'Maven', 'JavaScript', 'Kondor+ by Misys (formerly by Reuters)',
            'Shell scripting', 'STP', 'Sybase ASE (T/SQL)', 'CTRLM', 'Team Management']
    },
    {
        id: i++, startDate: '2012-05-01', endDate: '2012-11-01', locations: ['Montreuil, France'], company: 'BNP Paribas',
        title: 'Software Engineer (Intern)',
        tasks: [
            'I made detailed analysis of business requirements to enhance the reporting tool of the Treasury.',
            'I developed lots of new reports through the creation of complex and optimized stored procedures.',
            'These optimizations were mainly done through indexes and crafted SQL joins with temporary tables.'
        ],
        skills: ['SVN', 'Shell scripting', 'Sybase ASE (T/SQL)', 'C++', 'Powerbuilder']
    },
    {
        id: i++, startDate: '2011-04-01', endDate: '2011-08-01', locations: ['Paris, France'], company: 'buzzing light',
        title: 'Fullstack Developper',
        tasks: [
            'I was part of both backend and frontend development for the short-term jobs web and mobile platform <strong><i>Beepjob</i></strong>.',
            'I fully designed and developed the search engine based on the user location, enhancement with many criterias such as distance, type of contract, relevance etc.',
            'I also helped define the visual identity.'
        ],
        skills: ['PHP', 'HTML', 'CSS', 'JavaScript', 'AJAX', 'MySQL', 'Google Geolocation API']
    }

];
