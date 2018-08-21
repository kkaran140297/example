import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userName: string ='';
  password: string ='';
  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  addUser(){
    this.userService.getUser(this.userName,this.password).subscribe((data)=> {
      this.userName='';
      this.password='';
    })
  }
}
