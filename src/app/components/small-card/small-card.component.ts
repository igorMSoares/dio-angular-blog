import { Component, Input } from '@angular/core';
import { getContent, NullArticle } from '../data/Content';

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

  ngOnInit() {
    this.setCardProps(this.articleId);
  }

  setCardProps(id: string) {
    if (id === '-1') return;

    const content = getContent(id);
    if (content instanceof NullArticle) return;

    this.cardAuthor = content.author;
    this.coverPhoto = content.photo;
    this.cardDate = content.date;
    this.cardTitle = content.title;
  }
}
