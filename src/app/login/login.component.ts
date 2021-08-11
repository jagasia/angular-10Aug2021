import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  loginStatus:string='';
  // @Output() login:EventEmitter<[string, string]>=new EventEmitter();
  @Output() status:EventEmitter<string>=new EventEmitter();
  constructor(private fb:FormBuilder) { 
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:[]
    });
  }

  ngOnInit(): void {
  }

  fnLogin()
  {
    var username=this.loginForm.controls['username'].value;
    var password=this.loginForm.controls['password'].value;
    // alert(username+" : "+password);
    // this.login.emit([username,password]);
    if(username==password)
    {
      this.loginStatus="Login failed";
      this.status.emit('login');
    }else
    {
      this.loginStatus="Login is successful";
      this.status.emit('logout');
    }
  }

}
