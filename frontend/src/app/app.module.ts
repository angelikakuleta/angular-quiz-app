import { ApiService } from './core/http/api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionsComponent } from './home/components/questions/questions.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { QuizzesComponent } from './home/components/quizzes/quizzes.component';
import { QuestionListComponent } from './home/components/questions/question-list/question-list.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/pages/home/home.component';
import { NavComponent } from './core/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegisterComponent } from './core/authentication/register/register.component';
import { AuthService } from './core/authentication/auth.service';
import { AuthInterceptor } from './core/authentication/auth.interceptor';
import { LoginComponent } from './core/authentication/login/login.component';
import { PlayComponent } from './home/components/play/play.component';
import { PlayQuizComponent } from './home/components/play/play-quiz/play-quiz.component';
import { MatRadioModule } from '@angular/material/radio';
import { PlayResultComponent } from './home/components/play/play-result/play-result.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'quizzes', component: QuizzesComponent },
  { path: 'quizzes/:quizId', component: QuestionsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'play/:quizId', component: PlayQuizComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuizzesComponent,
    QuestionListComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    PlayComponent,
    PlayQuizComponent,
    PlayResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // import HttpClientModule after BrowserModule
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatRadioModule,
    MatProgressBarModule
  ],
  providers: [
    ApiService, 
    AuthService, 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
