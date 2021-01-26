import { NotificationService } from '../../notification.service';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../Category';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {


  category: Category = new Category();
  submitted = false;

  constructor(private categoryService: CategoryService,
              private router: Router,
              private notificationService: NotificationService) { }
  ngOnInit() {
  }
  showToasterSuccess(){
    this.notificationService.showSuccess("Cập nhật thành công","Thông báo!");
  }

  showToasterError(){
    this.notificationService.showError("Có đáp án trùng nhau hoặc đáp án đúng không trùng với các đáp án","Thông báo!");
  }


  Category(): void {
    this.submitted = false;
    this.category = new Category();
  }

  save() {
    this.categoryService.createCategory(this.category).subscribe((data: any) => {
        console.log(data);
        this.showToasterSuccess()
        this.category = new Category();
        this.goToList();
      },
      (error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/category-list']);
  }

}
