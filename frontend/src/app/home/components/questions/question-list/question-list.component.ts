import { ApiService } from '../../../../core/http/api.service';
import { Component, OnInit } from '@angular/core';
import { Question } from '../../../interfaces/question.interface';

@Component({
	selector: 'question-list',
	templateUrl: './question-list.component.html'
})
export class QuestionListComponent implements OnInit {
  
	questions: Array<Question> = [];

	constructor(protected api: ApiService) { }

	ngOnInit(): void {
		this.api.getQuestions().subscribe(res => {
			this.questions = res;
		});
	}
}
