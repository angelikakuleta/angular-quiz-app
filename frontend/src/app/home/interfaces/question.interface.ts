export interface Question {
    id: number,
    text: string,
    correctAnswer: string,
    answer1: string,
    answer2: string,
    answer3: string,
    quizId: number,
    answers: string[],
    selectedAnswer: string
}