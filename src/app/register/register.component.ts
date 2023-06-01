import { Component } from '@angular/core';

interface IRegisterProps{
  fullName:string,
  email:string,
  contact:number,
  fileData:string,
  password:string,
  gender:string
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
show:boolean=false;
show1:boolean=false
formValue:IRegisterProps = <IRegisterProps> {}
cPassword:string=''

handleRegister(){
 console.log(this.formValue);
 
}

passwordToggle() {
  this.show = !this.show;
}

}

