export class Project {
  public name: string;
  public description: string;
  public details: Object;
  public link: string;

  constructor(
    name: string,
    description: string,
    details: Object,
    link: string
  ) {
    (this.name = name),
      (this.description = description),
      (this.details = details),
      (this.link = link);
  }
}
