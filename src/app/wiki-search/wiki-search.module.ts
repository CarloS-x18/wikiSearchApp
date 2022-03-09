import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardArticleComponent } from './components/card-article/card-article.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { SnippetPipe } from './pipes/snippet.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    CardArticleComponent,
    SnippetPipe,
  ],
  exports: [
    HomeComponent,
    CardArticleComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class WikiSearchModule { }
