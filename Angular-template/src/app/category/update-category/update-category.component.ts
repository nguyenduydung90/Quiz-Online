import { NotificationService } from '../../notification.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../Category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  id!: number;
  category!: Category;
  public submitted: boolean | undefined;

  constructor(private route: ActivatedRoute, private router: Router,
              private categoryService: CategoryService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.category = new Category();

    this.id = this.route.snapshot.params['id'];

    this.categoryService.getCategory(this.id)
      .subscribe(data => {
        this.category = data;
      }, error => console.log(error));
  }

  showToasterSuccess(){
    this.notificationService.showSuccess("Cập nhật thành công","Thông báo!");
  }

  showToasterError(){
    this.notificationService.showError("Có đáp án trùng nhau hoặc đáp án đúng không trùng với các đáp án","Thông báo!");
  }
  updateCategory() {
    this.categoryService.updateCategory(this.id, this.category)
      .subscribe(data => {
        console.log(data);
        this.showToasterSuccess();
        this.category = new Category();
        this.goToList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCategory();
  }

  goToList() {
    this.router.navigate(['/category-list']);
  }

}
