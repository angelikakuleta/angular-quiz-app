import { Question } from '../../interfaces/question.interface';
import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../../core/http/api.service'
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'questions',    
    templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {
    
	quizId: any;
	question: Question = {} as Question;
	eventsSubject: Subject<Question> = new Subject<Question>();

	constructor(private api: ApiService, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.quizId = this.route.snapshot.paramMap.get('quizId');
		this.api.questionSelected.subscribe(question => this.question = question);
	}

	post(question: Question) {
		question.quizId = 1;
		this.api.postQuestion(question).subscribe(res => {
            this.eventsSubject.next(res as Question);
        });
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