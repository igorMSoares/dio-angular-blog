import { Component, Input } from '@angular/core';
import { ArticleService, NullArticle } from 'src/app/services/article.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent {
  @Input()
  articleId: string = '0';

  cardAuthor: string = '';
  coverPhoto: string = '';
  cardDate: string = '';
  cardTitle: string = '';

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
  }
}
