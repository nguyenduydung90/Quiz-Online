import { Router } from '@angular/router';
import { NotificationService } from './../../notification.service';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name!: string;
  email!: string;
  password!: string;
  submitted: boolean = false;

  constructor(
    private userService: UserService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // test(): void {
  //   var confirm_password = $('#confirm_password').val();
  //   var password = $('#password').val();
  //   var userName = $('#userName').val();
  //   var email = $('#email').val();
  //   if (confirm_password !== password || userName == null || email == null) {
  //     alert("Đăng kí thất bại! Vui lòng nhập lại")
  //     return;
  //   } else {
  //     this.register();
  //   }
  // }

  onSubmit() {
    this.submitted = true;
    this.register();
  }

  showToasterSuccess() {
    this.notificationService.showSuccess('Đăng ký thành công.', 'Thông báo !');
  }

  showToasterError() {
    this.notificationService.showError(
      'Đăng ký thất bại',
      'email của quý khách đã có người sử dụng'
    );
  }

  register() {
    this.userService
      .register({
        name: this.name,
        email: this.email,
        password: this.password,
        role: '2',
      })
      .subscribe((data) => {
        // console.log(data.HttpErrorResponse);
        // if (data.statusCode == 201) {
        //   // console.log(data);
        this.showToasterSuccess();
        this.router.navigate(['login']);
        // } else {
        //   this.showToasterError();
        //
        // }
      });
  }
}
