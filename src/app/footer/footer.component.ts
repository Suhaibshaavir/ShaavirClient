import { Component } from '@angular/core';
interface ILink{
  label:string;
  url?:string
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
showAlert:boolean = true;
Links :Array<ILink>= [ 
  {label:'Contact Us',url:'www.shaavir.com/contact'},
  {label:'About Shaavir',url:'www.shaavir.com/about'},
  {label:'Privacy Commitment',url:'www.shaavir.com/privacy'},
  {label:'Contact Us',url:'www.shaavir.com/contact'},
  {label:'Contact Us',url:'www.shaavir.com/contact'} ]
}
