import { DeleteCategoryComponent } from './category/delete-category/delete-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { UpdateQuizComponent } from './quiz/update-quiz/update-quiz.component';
import { CreateQuizComponent } from './quiz/create-quiz/create-quiz.component';
import { DeleteQuizComponent } from './quiz/delete-quiz/delete-quiz.component';
import { QuizzesListComponent } from './quiz/quizzes-list/quizzes-list.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'quizzes', component: QuizzesListComponent },
  { path: 'create-quiz', component: CreateQuizComponent },
  { path: 'delete-quiz/:id', component: DeleteQuizComponent },
  { path: 'update-quiz/:id', component: UpdateQuizComponent },
  { path: 'category-add', component: CreateCategoryComponent },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'update-category/:id', component: UpdateCategoryComponent },
  { path: 'delete-category/:id', component: DeleteCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
