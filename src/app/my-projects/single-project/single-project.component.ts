import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss'],
})
export class SingleProjectComponent implements OnInit {
  keys!: string[];
  values!: string[];
  project!: Project;
  id!: number;
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.project = this.projectService.getProject(this.id);
      this.keys = Object.keys(this.project.details);
      this.values = Object.values(this.project.details);
    });
  }
}
