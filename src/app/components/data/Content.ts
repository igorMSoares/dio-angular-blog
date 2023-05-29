import { contentList } from 'src/app/components/data/contentList';

interface Article {
  id: string;
  photo: string;
  url: string;
  date: string;
  author: string;
  title: string;
  description: string;
  text: string;
}

export class NullArticle implements Article {
  id: string = '-1';
  photo: string = '';
  url: string = '';
  date: string = '';
  author: string = '';
  title: string = '';
  description: string = '';
  text: string = '';
}

export const getContent = (contentId: string): Article => {
  const result = contentList.filter(article => article.id === contentId);
  if (result.length === 0) return new NullArticle();

  const content = result[0];

  return {
    id: content.id,
    photo: content.photo,
    url: content.url,
    date: content.date,
    author: content.author,
    title: content.title,
    description: content.description,
    text: content.text,
  };
};
