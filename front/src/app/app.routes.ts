import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { GenerateQuizComponent } from './pages/generate-quiz/generate-quiz.component';
import { QuestionsAnswersReferentialComponent } from './pages/admin/questions-answers-referential/questions-answers-referential.component';
import { ManageAgentComponent } from './pages/admin/manage-agent/manage-agent.component';
import { ResultsComponent } from './pages/agent/results/results.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: "home/:id", component: HomeComponent},
    { path: 'admin', component: AdminComponent},
    { path: "admin/:id", component: AdminComponent },
    { path: 'login', component: LoginComponent },
    { path: "login/:id", component: LoginComponent },
    { path: 'generate-quiz', component: GenerateQuizComponent },
    { path: "generate-quiz/:id", component: GenerateQuizComponent },
    { path: 'questions-answers-referential', component: QuestionsAnswersReferentialComponent },
    { path: "questions-answers-referential/:id", component: QuestionsAnswersReferentialComponent },
    { path: 'manage-agent', component: ManageAgentComponent },
    { path: "manage-agent/:id", component: ManageAgentComponent },
    { path: 'results', component: ResultsComponent },
    { path: "results/:id", component: ResultsComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", component: NotFoundComponent },
];


