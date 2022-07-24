import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Question } from 'src/app/home/interfaces/question.interface';
import { Quiz } from 'src/app/home/interfaces/quiz.interface';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {

    private questionSelectedSource = new Subject<Question>();
    questionSelected = this.questionSelectedSource.asObservable();
    
    constructor(private http: HttpClient) {}

	getQuestions(){
        return this.http.get<Question[]>('https://localhost:5001/api/questions');
    }

    postQuestion(question: Question){
        return this.http.post('https://localhost:5001/api/questions', question);
    }
    
    putQuestion(question: Question){
        this.http.put(`https://localhost:5001/api/questions/${question.id}`, question).subscribe(res => {
            console.log(res);
        });     
    }

	getQuizzes(){
        return this.http.get<Quiz[]>('https://localhost:5001/api/quizzes');
    }
	
    postQuiz(quiz: Quiz) {
        return this.http.post('https://localhost:5001/api/quizzes', quiz);
    }

	putQuiz(quiz: Quiz){
        this.http.put(`https://localhost:5001/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
            console.log(res);
        });     
    }

    selectQuestion(question: Question)
    {
        this.questionSelectedSource.next(question);
    }
}