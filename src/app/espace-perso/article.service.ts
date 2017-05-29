import { Injectable } from '@angular/core';

import { Article } from './espace-perso.component';
import { Articles } from './espace-persomock';

@Injectable()
export class ArticleService {
  getArticles(): Promise<Article[][]> {
    return Promise.resolve(Articles);
  }
}