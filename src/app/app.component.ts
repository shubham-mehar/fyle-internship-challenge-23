import { Component, Input } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fyle-frontend-challenge';
  username: string = '';
  user: any;
  githubUser: any;

  @Input() reposPerPage: number = 10;
  @Input() totalItems: number = 0;

  maxReposPerPage: number = 100;


  repositories: any[] = [];
  loading: boolean = false;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(
    private apiService: ApiService ) {}

onSearchUsername(username: string) {
  console.log('Username searched:', username);
  this.username = username;
}

}
