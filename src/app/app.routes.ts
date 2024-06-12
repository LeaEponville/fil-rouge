import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { ResultsComponent } from './pages/results/results.component';
import { AgentsManagementComponent } from './pages/agents-management/agents-management.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: "home/:id", component: HomeComponent },
    { path: 'admin', component: AdminComponent },
    { path: "admin/:id", component: AdminComponent },
    { path: 'login', component: LoginComponent },
    { path: "login/:id", component: LoginComponent },
    { path: 'quiz', component: QuizComponent },
    { path: "quiz/:id", component: QuizComponent },
    { path: 'questions', component: QuestionsComponent },
    { path: "questions/:id", component: QuestionsComponent },
    { path: 'results', component: ResultsComponent },
    { path: "results/:id", component: ResultsComponent },
    { path: 'agents-management', component: AgentsManagementComponent },
    { path: "agents-management/:id", component: AgentsManagementComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", component: NotFoundComponent },
];
