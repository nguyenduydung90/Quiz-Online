import { CategoryService } from '../../category/category.service';
import { NotificationService } from '../../notification.service';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
import { Category } from '../../category/Category';
import { Observable } from 'rxjs';
import { Quiz } from '../Quiz';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-quiz',
  templateUrl: './delete-quiz.component.html',
  styleUrls: ['./delete-quiz.component.css']
})
export class DeleteQuizComponent implements OnInit {
  quiz!: Quiz;
  id!: number;
  quizzes!: Observable<Quiz[]>;
  category!: Category;
  constructor(
    private quizzesService: QuizService,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.quiz = new Quiz();
    this.category = new Category();

    this.id = this.route.snapshot.params["id"];

    this.quizzesService.getQuizzFindId(this.id).subscribe(
      (data: any) => {
        this.quiz = data;
        this.categoryService
          .getCategory(data.category_id)
          .subscribe((value) => {
            // console.log(1);
            this.category = value;
          });
      },
      (error: any) => console.log(error)
    );
  }

  deleteQuiz(id: number) {
    this.quizzesService.deleteQuizz(id).subscribe(
      (data: any) => {
        console.log(data);
        this.quizzesList();
        this.showToasterSuccess();
      },
      (error: any) => console.log(error)
    );
  }

  showToasterSuccess() {
    this.notificationService.showSuccess("Xóa thành công", "Thông báo!");
  }

  quizzesList() {
    this.router.navigate(["quizzes"]);
  }
}
