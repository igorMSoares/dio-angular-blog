import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getContent, NullArticle } from 'src/app/components/data/Content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  private id: string | null = '0';

  @Input()
  coverPhoto: string = '';

  @Input()
  contentDate: string = '';

  @Input()
  contentAuthor: string = '';

  @Input()
  contentTitle: string = '';

  @Input()
  contentUrl: string = '';

  @Input()
  contentText: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => (this.id = value.get('id')));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    if (!id) return;

    const content = getContent(id);
    if (content instanceof NullArticle) return;

    this.coverPhoto = content.photo;
    this.contentDate = content.date;
    this.contentAuthor = content.author;
    this.contentTitle = content.title;
    this.contentUrl = content.url;
    this.contentText = content.text;
  }
}
