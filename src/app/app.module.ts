import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { UserInputComponent } from './components/user-input/user-input.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    RepoListComponent,
    PaginationComponent,
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
