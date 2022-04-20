export class Project {
  public name: string;
  public description: string;
  public details: Object;
  public link: string;
  public gitlink: string;

  constructor(
    name: string,
    description: string,
    details: Object,
    link: string,
    gitlink: string
  ) {
    (this.name = name),
      (this.description = description),
      (this.details = details),
      (this.link = link);
    this.gitlink = gitlink;
  }
}
