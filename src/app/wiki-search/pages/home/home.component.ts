import { Component } from '@angular/core';
import { WikiService } from '../../services/wiki.service';
import { Search } from '../../interface/Articles.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  term: string = '';
  showAlert: boolean = false;
  showAlertError: boolean = false;

  articles: Search[] = [];

  constructor( private wikiService: WikiService ) { }

  searchArticles() {

    if( this.term.length === 0 ) {

      this.articles = [];

      this.showAlertError = false;
      this.showAlert = true;

      setTimeout(() => {
        this.showAlert = false;
      }, 5000);

      return;

    }

    this.showAlert = false;

    this.wikiService.getArticlesWithTerm(this.term)
    .subscribe( resp => {
        if( resp.query.search.length === 0 ) {

          this.articles = [];

          this.showAlert = false;
          this.showAlertError = true;

          setTimeout(() => {
            this.showAlertError = false;
          }, 5000);

          return;
        }

        this.articles = resp.query.search;
        this.term = '';
      });
    }

}
