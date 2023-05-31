import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  
})
export class RegisterComponent {
name:string=""
label:string="Register"
username:string=""
handleRegister(){
  console.log(this.username)
}
}

