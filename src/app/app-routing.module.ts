import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './my-projects/projects.component';
import { SingleProjectComponent } from './my-projects/single-project/single-project.component';
import { SingleProjectStartComponent } from './single-project-start/single-project-start.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'projects',
    component: ProjectsComponent,
    children: [
      { path: '', component: SingleProjectStartComponent },
      { path: ':id', component: SingleProjectComponent },
    ],
  },
  { path: 'aboutme', component: AboutMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes), 
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],

  exports: [RouterModule],
})
export class AppRoutingModule {}
