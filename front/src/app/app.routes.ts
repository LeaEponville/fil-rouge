import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AgentComponent } from './pages/agent/agent.component';
import { LoginComponent } from './pages/login/login.component';
import { ConfigureExpComponent } from './pages/admin/configure-exp/configure-exp.component';
import { CreateQuizComponent } from './pages/admin/create-quiz/create-quiz.component';
import { ListQuizComponent } from './pages/agent/list-quiz/list-quiz.component';
import { GenerateQuizAdminComponent } from './pages/admin/generate-quiz-admin/generate-quiz-admin.component';
import { GenerateQuizAgentComponent } from './pages/agent/generate-quiz-agent/generate-quiz-agent.component';
import { ManageAgentComponent } from './pages/admin/manage-agent/manage-agent.component';
import { QuestionsAnswersReferentialComponent } from './pages/admin/questions-answers-referential/questions-answers-referential.component';
import { SeeQuizComponent } from './pages/admin/see-quiz/see-quiz.component';
import { ResultsComponent } from './pages/agent/results/results.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SidebarComponent } from './components/sidebar/sidebar';
import { QuizComponent } from './pages/quiz/quiz.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: "home/:id", component: HomeComponent},
    { path: 'admin', component: AdminComponent},
    { path: "admin/:id", component: AdminComponent },
    { path: 'agent', component: AgentComponent },
    { path: "agent/:id", component: AgentComponent },
    { path: 'login', component: LoginComponent },
    { path: "login/:id", component: LoginComponent },
    { path: 'config-exp', component: ConfigureExpComponent },
    { path: "config-exp/:id", component: ConfigureExpComponent },
    { path: 'create-quiz', component: CreateQuizComponent },
    { path: "create-quiz/:id", component: CreateQuizComponent },
    { path: 'list-quiz', component: ListQuizComponent },
    { path: "list-quiz/:id", component: ListQuizComponent },
    { path: 'see-quiz', component: SeeQuizComponent },
    { path: "see-quiz/:id", component: SeeQuizComponent },
    { path: 'generate-quiz-admin', component: GenerateQuizAdminComponent },
    { path: "generate-quiz-admin/:id", component: GenerateQuizAdminComponent },
    { path: 'generate-quiz-agent', component: GenerateQuizAgentComponent },
    { path: "generate-quiz-agent/:id", component: GenerateQuizAgentComponent },
    { path: 'questions-answers-referential', component: QuestionsAnswersReferentialComponent },
    { path: "questions-answers-referential/:id", component: QuestionsAnswersReferentialComponent },
    { path: 'manage-agent', component: ManageAgentComponent },
    { path: "manage-agent/:id", component: ManageAgentComponent },
    { path: 'results', component: ResultsComponent },
    { path: "results/:id", component: ResultsComponent },
    { path: 'quiz', component: QuizComponent },
    { path: "quiz/:id", component: QuizComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", component: NotFoundComponent },
    { path: "sidebar", component: SidebarComponent },
];


