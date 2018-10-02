import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {Routes, RouterModule}     from '@angular/router';

import { AppComponent } from './app.component';

import { AVENGERSCHARACTERComponent } from './avengerscharacter/avengerscharacter.component';
import { DCHEROESComponent } from './dcheroes/dcheroes.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { MydirectiveComponent } from './mydirective/mydirective.component';
import { MyFormsComponent } from './my-forms/my-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


import { AppBoldDirective } from './app-bold.directive';
import { MarvelMoviesComponent } from './marvel-movies/marvel-movies.component';

const ROUTES: Routes= [
  {path:'', component:HomeComponent},
  {path:'blog', component:BlogComponent},
  {path:'about', component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AVENGERSCHARACTERComponent,
    DCHEROESComponent,
    AppBoldDirective,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    MydirectiveComponent,
    MyFormsComponent,
    ReactiveFormsComponent,
    MarvelMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
