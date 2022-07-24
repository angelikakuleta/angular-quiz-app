import { Question } from '../../interfaces/question.interface';
import { Component } from '@angular/core'
import { ApiService } from '../../../core/http/api.service'

@Component({
    selector: 'questions',    
    templateUrl: './questions.component.html'
})
export class QuestionsComponent {
    
	question: Question = {} as Question;

	constructor(private api: ApiService) { }

	post(question: Question) {
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