import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sign Up Form!';
  status: string = 'login';

  fnValidateLogin(user: any) {
    if (user[0] == user[1])
      this.status = "Login failed";
    else
      this.status = "Login successful";
  }

  fnStatus(status:string)
  {
    this.status=status;
  }
}
