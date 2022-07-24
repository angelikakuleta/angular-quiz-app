import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Question } from 'src/app/home/interfaces/question.interface';
import { Quiz } from 'src/app/home/interfaces/quiz.interface';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {}

	getQuestions(){
        return this.http.get<Question[]>('https://localhost:5001/api/questions');
    }

    postQuestion(question: Question){
        this.http.post('https://localhost:5001/api/questions', question).subscribe(res =>  {
			console.log(res);
		})
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
}