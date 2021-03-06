import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubApiService } from './github-api.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { DaysPassedPipe } from './days-passed.pipe'

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    DaysPassedPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
