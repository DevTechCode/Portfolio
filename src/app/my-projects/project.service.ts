import { Project } from './project.model';

// @Injectable()
export class ProjectService {
  //   projectSelected = new EventEmitter<Project[]>();
  //   singleSelected = new EventEmitter<Project>();

  private Projects: Project[] = [
    new Project(
      'Shop',
      'Krótki opis tego co sie robi w swiecie',
      {
        Framework: 'Express',
        Database: 'MongoDB',
        Architecture: 'MVC',
        Deploymeny: 'Docker',
      },
      'http://51.83.185.173:3000/'
    ),
    new Project(
      'Drag & Drop',
      'Piekna sprawa, dajmy tutaj jakis dluzszy opis zeby wiadomo bylo jak to wyglada na powaznie a nie tyko tak o po prostu bez sensu napisane :)',
      {
        Language: 'TypeScript',
        Budler: 'Webpack',
        Database: 'None',
        Deploymeny: 'Docker',
      },
      'http://51.83.185.173:8080/'
    ),
    new Project(
      'Calendar',
      'Wiadomo',
      {
        Framework: 'udemy',
        Database: 'MongoDB',
        Architecture: 'MVC',
        Deploymeny: 'Docker',
      },
      'http://51.83.185.173:3030/'
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
