import { ApiService } from '../../../../core/http/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../../interfaces/question.interface';
import { Observable } from 'rxjs';

@Component({
	selector: 'question-list',
	templateUrl: './question-list.component.html'
})
export class QuestionListComponent implements OnInit {
	
	@Input() quizId: any;
	@Input() events!: Observable<Question>;
	
	questions: Array<Question> = [];

	constructor(protected api: ApiService) { }

	ngOnInit(): void {
		this.api.getQuestions(this.quizId).subscribe(res => {
			this.questions = res;
		});

		this.events && this.events.subscribe((question) => this.questions.push(question)) 
	}
}
