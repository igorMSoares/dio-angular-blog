import { Component, Input } from '@angular/core';
import { ArticleService, NullArticle } from 'src/app/services/article.service';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  @Input()
  articleId: string = '-1';

  cardAuthor: string = '';
  coverPhoto: string = '';
  cardDate: string = '';
  cardTitle: string = '';
  cardUrl: string = '';
  cardDescription: string = '';

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.setCardProps(this.articleId);
  }

  setCardProps(id: string) {
    if (id === '-1') return;

    const content = this.articleService.getArticle(id);

    if (content instanceof NullArticle) return;

    this.cardAuthor = content.author;
    this.coverPhoto = content.photo;
    this.cardDate = content.date;
    this.cardTitle = content.title;
    this.cardUrl = content.url;
    this.cardDescription = content.description;
  }
}
