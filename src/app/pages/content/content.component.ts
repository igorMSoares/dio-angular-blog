import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService, NullArticle } from 'src/app/services/article.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  private id: string | null = '0';

  coverPhoto: string = '';
  contentDate: string = '';
  contentAuthor: string = '';
  contentTitle: string = '';
  contentUrl: string = '';
  contentText: string = '';

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => (this.id = value.get('id')));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    if (!id) return;

    const content = this.articleService.getArticle(id);
    if (content instanceof NullArticle) return;

    this.coverPhoto = content.photo;
    this.contentDate = content.date;
    this.contentAuthor = content.author;
    this.contentTitle = content.title;
    this.contentUrl = content.url;
    this.contentText = content.text;
  }
}
