import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/home/interfaces/question.interface';

@Component({
	selector: 'play-result',
	templateUrl: './play-result.component.html',
	styleUrls: ['./play-result.component.scss']
})
export class PlayResultComponent implements OnInit {

  @Input()
  questions: Question[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  	get correct(): number {
		var correct = 0;
		this.questions.forEach(q => {
			if (q.correctAnswer == q.selectedAnswer)
				correct++
		});
		
		return correct;
	};

	get progress() : number {
		return Math.floor(this.correct / this.questions.length * 100) ;
	}
}
