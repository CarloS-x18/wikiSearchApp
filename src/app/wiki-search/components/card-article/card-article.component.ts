import { Component, Input } from '@angular/core';

import { Search } from '../../interface/Articles.interface';

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html'
})
export class CardArticleComponent {

  @Input('article') article! : Search;

}
