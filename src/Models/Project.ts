export default class Project {

  readonly id: number;
  readonly name: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly about: string;
  readonly language: string;
  readonly framework: string;
  readonly middleware: string;

  constructor(
    {
      id,
      name,
      startDate,
      endDate,
      about,
      language,
      framework,
      middleware}:
      {
        id: number,
        name: string,
        startDate: string,
        endDate: string,
        about: string,
        language: string,
        framework: string,
        middleware: string
      }
  ) {
    this.id = id;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.about = about;
    this.language = language;
    this.framework = framework;
    this.middleware = middleware;
  }

}