import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnChanges {
  @Input() username: string = '';
  @Input() user: any;
  @Input() reposPerPage: number = 10;
  totalItems: number = 0;
  repositories: any[] = [];
  loading: boolean = false;
  currentPage: number = 1;
  totalPages: number = 1;
  maxReposPerPage: number = 100; 

  constructor(private apiService: ApiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called:', changes);
    if (changes['username'] && changes['username'].currentValue) {
      this.currentPage = 1;
      this.fetchData();
    }
  }
  generateArray(length: number): any[] {
    return new Array(length);
  }
placeholders: any[] = Array.from({ length: 3 }); 

  onSearchUsername(username: string) {
    console.log('Username searched:', username);
    this.username = username;
    this.fetchData();
  }
  onPageChanged(page: number) {
    this.currentPage = page;
    this.fetchData();
  }
  onReposPerPageChange(value: number): void {
    if (value >= 1 && value <= this.maxReposPerPage) {
      this.reposPerPage = value;
      this.fetchData();
    }
  }
  applyRepositoriesPerPage(): void {
    this.fetchData();
  }

  private fetchData() {
      if (!this.username) {
        return;
      }
      console.log('Fetching data for user:', this.username);
      this.loading = true;
      this.apiService.getUser(this.username).subscribe(
        (user) => {
          if (!user) {
            console.error('User not found');
            this.loading = false;
            return;
          }
    
          this.user = user;
          console.log('User data fetched:', user);
    
          this.apiService.getRepos(this.username, this.currentPage, this.reposPerPage).subscribe(
            (repos) => {
              this.repositories = repos;
              this.totalItems = this.user.public_repos;
              this.totalPages = Math.ceil(this.totalItems / this.reposPerPage);
              this.loading = false;
              console.log('Repositories fetched:', repos);
            },
            (error) => {
              console.error('Error fetching repositories:', error);
              this.loading = false;
            }
          );
        },
        (error) => {
          console.error('Error fetching user data:', error);
          this.loading = false;
        }
      );
    }
      
}
