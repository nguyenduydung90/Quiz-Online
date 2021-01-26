import { NotificationService } from '../../notification.service';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizService } from '../../quiz/quiz.service';
import { CategoryService } from '../category.service';
import { Observable } from 'rxjs';
import { Category } from '../Category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  category!: Category;
  id!: number;
  // categories!: Observable<Category[]>
    constructor(
      private categoryService: CategoryService,
      private quizService: QuizService,
      private router: Router,
      private route: ActivatedRoute,
      private notificationService: NotificationService

    ) { }

    ngOnInit(): void {
      this.category=new Category();
      this.id= this.route.snapshot.params['id'];
      // this.categoryService.getCategory(this.id)
      // .subscribe((data:any)=>{
      //   console.log(data);
      //   this.category=data;
      // },(error:any)=>console.log(error));
    }

    deleteCategory(id: number){

      this.categoryService.deleteCategory(id)
      .subscribe((data:any)=>{
        console.log(data)
        this.categoriesList();
        this.showToasterSuccess()
      })
    }

    showToasterSuccess(){
      this.notificationService.showSuccess("Xóa thành công","Thông báo!");
    }

    categoriesList(){
      this.router.navigate(['category-list'])
    }
}
