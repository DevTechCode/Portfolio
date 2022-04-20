import { Project } from './project.model';

// @Injectable()
export class ProjectService {
  //   projectSelected = new EventEmitter<Project[]>();
  //   singleSelected = new EventEmitter<Project>();

  private Projects: Project[] = [
    new Project(
      'Shop',
      'A shop app which allows you to add and remove products, place orders and receive invoices.',
      {
        Framework: 'Express',
        Database: 'MongoDB',
        Architecture: 'MVC',
        Deployment: 'Docker',
      },
      'http://51.83.185.173:3000/',
      'https://github.com/DevTechCode/Shop'
    ),
    new Project(
      'Drag & Drop',

      'An employee management application. Allows you to assign available employees to projects which later can be dragged around into different stages.',

      {
        Language: 'TypeScript',
        Bundler: 'Webpack',
        Database: 'None',
        Deployment: 'Docker',
      },
      'http://51.83.185.173:8080/',
      'https://github.com/DevTechCode/Drag-And-Drop'
    ),
    new Project(
      'Calendar',
      'A calendar app allowing you to create your own employees database and schedule appointements with clients.',
      {
        Framework: 'udemy',
        Database: 'MongoDB',
        Architecture: 'MVC',
        Deploymeny: 'Docker',
      },
      'http://51.83.185.173:3030/',
      'https://github.com/DevTechCode/Calendar'
    ),
  ];

  getProjects() {
    return this.Projects.slice();
  }

  getProject(index: number) {
    return this.Projects[index];
  }

  addProject(project: Project) {
    this.Projects.push(project);
    // this.projectSelected.emit(this.Projects.slice());
  }

  addProjects(projects: Project[]) {
    this.Projects.push(...projects);
    // this.projectSelected.emit(this.Projects.slice());
  }
}
