import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user:any;
  repos:any;
  username:any;
  constructor(private _githubService: GithubApiService) { 
    this._githubService.getUser().subscribe(user =>{
      this.user = user;
    });

    
  }

  ngOnInit() {
  }

}
