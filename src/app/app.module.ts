import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './banner/banner.component';
import { TilesComponent } from './tiles/tiles.component';
import { SingleProjectComponent } from './my-projects/single-project/single-project.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { ProjectsComponent } from './my-projects/projects.component';
import { ProjectItemComponent } from './my-projects/project-item/project-item.component';
import { CvComponent } from './about-me/cv/cv.component';
import { HomeComponent } from './home/home.component';
import { SingleProjectStartComponent } from './single-project-start/single-project-start.component';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    TilesComponent,
    SingleProjectComponent,
    ContactComponent,
    FooterComponent,
    ProjectsComponent,

    ProjectItemComponent,
    CvComponent,
    HomeComponent,
    SingleProjectStartComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatIconModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
