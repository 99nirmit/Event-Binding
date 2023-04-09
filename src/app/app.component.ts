import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eventBinding';

  msg:string="";
  onAddCart(){
    this.msg="Product added";
  }
  
  onInputClick(event:any){
    console.log(event.target.value);
  }

  onAdd(event:any){
    this.msg = event.target.value + " Added in Cart";
    
  }
  
}
