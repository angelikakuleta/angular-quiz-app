import { Question } from '../../interfaces/question.interface';
import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../../core/http/api.service'

@Component({
    selector: 'questions',    
    templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {
    
	question: Question = {} as Question;

	constructor(private api: ApiService) { }

	ngOnInit(): void {
		this.api.questionSelected.subscribe(question => this.question = question);
	}

	post(question: Question) {
		question.quizId = 1;
		this.api.postQuestion(question);     
		this.clear();
	}

	put(question: Question) {
		this.api.putQuestion(question);
		this.clear();
	}

	clear() {
		this.question = {} as Question;
	}
}