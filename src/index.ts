import { ajax } from 'rxjs/ajax';
/** 1. Обращение к GitHub API, как в примере на лекции, с использованием RxJS. */
const dataGitHub$ = ajax.getJSON('https://api.github.com/search/repositories?q=rxjs');
dataGitHub$.subscribe(data =>console.log(data))

/** 2. С использованием RxJS сделайте запросы к любому общедоступному API (например, аналогичное с GitHub API GitLab). */
const dataGitLub$ = ajax.getJSON('https://gitlab.com/api/v4/projects?search=nodejs')
dataGitLub$.subscribe(data =>console.log(data))