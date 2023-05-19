import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  arrayData:Array<string> =['Aqib','Suhaib','Athar','Salma','Ayaan','Bisma','Rais']
  name = 0
  value=1
  
  handleClick() {
    this.name = this.name + 1
  }

}
