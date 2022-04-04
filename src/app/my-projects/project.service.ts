import { Project } from './project.model';

// @Injectable()
export class ProjectService {
  //   projectSelected = new EventEmitter<Project[]>();
  //   singleSelected = new EventEmitter<Project>();

  private Projects: Project[] = [
    new Project(
      'Angular',
      'Piekna sprawa, dajmy tutaj jakis dluzszy opis zeby wiadomo bylo jak to wyglada na powaznie a nie tyko tak o po prostu bez sensu napisane :)',
      { Framework: 'udemy', Database: 'O tak', Architecture: 'MVC', Deploymeny: 'Docker' },
      'www.gogle.com'
    ),
    new Project(
      'NodeJs',
      'Wiadomo',
      { Framework: 'udemy', Database: 'O tak', Architecture: 'MVC', Deploymeny: 'Docker' } ,
      'www.gogle.com'
    ),
    new Project(
      'Shop',
      'Krótki opis tego co sie robi w swiecie',
      { Framework: 'udemy', Database: 'O tak', Architecture: 'MVC', Deploymeny: 'Docker' },
      'www.gogle.com'
    )
  ]

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
