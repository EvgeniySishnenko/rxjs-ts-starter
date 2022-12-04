import { ajax } from 'rxjs/ajax';

const dataGitHub$ = ajax.getJSON('https://api.github.com/search/repositories?q=rxjs');
dataGitHub$.subscribe(data =>console.log(data);
)