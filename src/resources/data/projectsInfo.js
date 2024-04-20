/* eslint-disable no-unused-vars */
import { aptitudes } from './baseFiles/aptitudes';
import { technologies } from './baseFiles/technologies';
import { areas } from './baseFiles/areas';

const aptMgt = aptitudes.management;
const aptDev = aptitudes.development;
const aptDes = aptitudes.design;
const aptSkl = aptitudes.softSkills;

const tecMgt = technologies.management;
const tecDev = technologies.development;
const tecDes = technologies.design;

const areaFront = areas.frontend;
const areaBack = areas.backend;
const areaFull = areas.fullstack;
const areaDes = areas.design;
const areaMgt = areas.management;

const projectsInfo = [
  {
    area: areaFront,
    name: 'Web personal, portafolio y curriculum',
    goal: 'Sitio web que me permite gestionar proyectos e información personal y laboral a travez del tiempo.',
    status: 'En desarrollo',
    source: 'Iniciativa personal',
    rating: '2',
    repository: 'https://github.com/ChristopherPinedo/WEB/',
    url: 'https://christopherpinedo.github.io/WEB/',
    aptitudes: {
      management: [aptMgt.gestionProyectos.name],
      development: [],
      design: [],
      softSkills: []
    },
    technologies: {
      management: [
        tecMgt.mgtAgile.name,
        tecMgt.jira.name,
        tecMgt.mgtKanaban.name,
        tecMgt.miro.name,
        tecMgt.github.name,
        tecMgt.wofCentralizado.name
      ],
      development: [tecDev.react.name, tecDev.reactJsx.name, tecDev.reactHooks.name, tecDev.reactRouter.name],
      design: [tecDes.metAtomicDesign.name]
    }
  },
  {
    area: areaFull,
    name: 'Control de personal y producción.',
    goal: 'Plataforma en tiempo real que permite gestionar producción y personal a cargo estructurado por sedes.',
    status: 'En desarrollo',
    source: 'Iniciativa personal',
    rating: '3',
    repository: 'https://github.com/ChristopherPinedo/PRODUCTION-SYSTEM',
    url: '',
    aptitudes: {
      management: [aptMgt.gestionProyectos.name],
      development: [aptDev.progFuncional.name],
      design: [],
      softSkills: [
        aptSkl.adaptabilidad.name,
        aptSkl.gestionTiempo.name,
        aptSkl.pensaCritico.name,
        aptSkl.resProblemas.name
      ]
    },
    technologies: {
      management: [
        tecMgt.mgtAgile.name,
        tecMgt.jira.name,
        tecMgt.mgtScrum.name,
        tecMgt.miro.name,
        tecMgt.github.name,
        tecMgt.wofCentralizado.name
      ],
      development: [
        tecDev.react.name,
        tecDev.reactJsx.name,
        tecDev.reactHooks.name,
        tecDev.reactRouter.name,
        tecDev.firebase.name,
        tecDev.fibAuth.name,
        tecDev.fibFirestore.name
      ],
      design: [tecDes.metAtomicDesign.name]
    }
  },
  {
    area: areaBack,
    name: 'API Whatsapp Chatbot',
    goal: '',
    status: 'En desarrollo',
    source: 'Iniciativa personal',
    rating: '2',
    repository: '',
    url: '',
    aptitudes: {
      management: [],
      development: [],
      design: [],
      softSkills: []
    },
    technologies: {
      management: [],
      development: [],
      design: []
    }
  },
  {
    area: areaFront,
    name: 'Frontend: Desafíos Básicos',
    goal: '',
    status: 'En desarrollo',
    source: 'Frontend Mentor',
    rating: '1',
    repository: '',
    url: '',
    aptitudes: {
      management: [],
      development: [],
      design: [],
      softSkills: []
    },
    technologies: {
      management: [],
      development: [],
      design: []
    }
  }
];

export { projectsInfo };
