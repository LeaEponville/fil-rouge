import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./pages/home/home.component')},
    { path: "home/:id", loadComponent: () => import('./pages/home/home.component')},
    { path: 'admin', loadComponent: () => import('./pages/admin/admin.component')},
    { path: "admin/:id", loadComponent: () => import('./pages/admin/admin.component')},
    { path: 'agent', loadComponent: () => import('./pages/agent/agent.component')},
    { path: "agent/:id", loadComponent: () => import('./pages/agent/agent.component')},
    { path: 'login', loadComponent: () => import('./pages/login/login.component')},
    { path: "login/:id", loadComponent: () => import('./pages/login/login.component')},
    { path: 'config-exp', loadComponent: () => import('./pages/admin/configure-exp/configure-exp.component')},
    { path: "config-exp/:id", loadComponent: () => import('./pages/admin/configure-exp/configure-exp.component')},
    { path: 'create-quiz', loadComponent: () => import('./pages/admin/create-quiz/create-quiz.component')},
    { path: "create-quiz/:id", loadComponent: () => import('./pages/admin/create-quiz/create-quiz.component')},
    { path: 'list-quiz', loadComponent: () => import('./pages/agent/list-quiz/list-quiz.component')},
    { path: "list-quiz/:id", loadComponent: () => import('./pages/agent/list-quiz/list-quiz.component')},
    { path: 'see-quiz', loadComponent: () => import('./pages/admin/see-quiz/see-quiz.component')},
    { path: "see-quiz/:id", loadComponent: () => import('./pages/admin/see-quiz/see-quiz.component')},
    { path: 'generate-quiz-admin', loadComponent: () => import('./pages/admin/generate-quiz-admin/generate-quiz-admin.component')},
    { path: "generate-quiz-admin/:id", loadComponent: () => import('./pages/admin/generate-quiz-admin/generate-quiz-admin.component')},
    { path: 'generate-quiz-agent', loadComponent: () => import('./pages/agent/generate-quiz-agent/generate-quiz-agent.component')},
    { path: "generate-quiz-agent/:id", loadComponent: () => import('./pages/agent/generate-quiz-agent/generate-quiz-agent.component')},
    { path: 'questions-answers-referential', loadComponent: () => import('./pages/admin/questions-answers-referential/questions-answers-referential.component')},
    { path: "questions-answers-referential/:id", loadComponent: () => import('./pages/admin/questions-answers-referential/questions-answers-referential.component')},
    { path: 'manage-agent', loadComponent: () => import('./pages/admin/manage-agent/manage-agent.component')},
    { path: "manage-agent/:id", loadComponent: () => import('./pages/admin/manage-agent/manage-agent.component')},
    { path: 'results', loadComponent: () => import('./pages/agent/results/results.component')},
    { path: "results/:id", loadComponent: () => import('./pages/agent/results/results.component')},
    { path: 'quiz', loadComponent: () => import('./pages/quiz/quiz.component')},
    { path: "quiz/:id", loadComponent: () => import('./pages/quiz/quiz.component')},
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", loadComponent: () => import('./pages/not-found/not-found.component')},
];


