import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/http/api.service';
import { Question } from 'src/app/home/interfaces/question.interface';

@Component({
	selector: 'play-quiz',
	templateUrl: './play-quiz.component.html',
	styleUrls: ['play-quiz.component.scss']
})
export class PlayQuizComponent implements OnInit {

	quizId: any;
	questions: Question[] = [];
	isFinished: boolean = false;

  	constructor(private api: ApiService, private route: ActivatedRoute) { }

  	ngOnInit(): void {
		this.quizId = this.route.snapshot.paramMap.get('quizId');

		this.api.getQuestions(this.quizId).subscribe(res => {
			this.questions = res;
			this.questions.forEach(q => {
				q.answers = [
					q.correctAnswer,
					q.answer1,
					q.answer2,
					q.answer3
				].filter(ans => !!ans);
				this.shuffle(q.answers);
			})
		});	
  	}

	finish() {
		this.isFinished = true;
	}

	private shuffle(a: string[]) {
		for (let i = a.length; i; i--) {
			let j = Math.floor(Math.random() * i);
			[a[i-1], a[j]] = [a[j], a[i-1]]
		}
	}
}
