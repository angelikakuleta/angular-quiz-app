import { ApiService } from './core/http/api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionsComponent } from './home/components/questions/questions.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
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

const routes = [
  { path: '', component: HomeComponent },
  { path: 'quizzes', component: QuizzesComponent },
  { path: 'questions', component: QuestionListComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuizzesComponent,
    QuestionListComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // import HttpClientModule after BrowserModule
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
