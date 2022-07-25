import { ApiService } from 'src/app/core/http/api.service';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../interfaces/quiz.interface';

@Component({
	selector: 'play',
	templateUrl: './play.component.html'
})
export class PlayComponent implements OnInit {

  	quizzes: Array<Quiz> = [];

  	constructor(private api: ApiService) { }

  	ngOnInit(): void {
		this.api.getAllQuizzes().subscribe(res => {
			this.quizzes = res;
		});
  	}
}
