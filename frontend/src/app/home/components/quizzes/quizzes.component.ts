import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { Quiz } from '../../interfaces/quiz.interface';

@Component({
	selector: 'quizzes',  
	templateUrl: './quizzes.component.html',
})
export class QuizzesComponent implements OnInit {

	currQuiz: Quiz = {} as Quiz;
	quizzes: Array<Quiz> = [];

	constructor(private api: ApiService) { }

	ngOnInit(): void {
		this.api.getQuizzes().subscribe(res => {
			this.quizzes = res;
		});
	}

	post(quiz: Quiz) {
		this.api.postQuiz(quiz).subscribe(res => this.quizzes.push(res as Quiz));
		this.clear();
	}

	put(quiz: Quiz) {
		this.api.putQuiz(quiz);
		this.clear();
	}

	clear() {
		this.currQuiz = {} as Quiz;
	}
}