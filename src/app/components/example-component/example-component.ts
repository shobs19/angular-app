import { Component } from '@angular/core';
import { TestComponent } from '../test-component/test-component';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-example-component',
  imports: [TestComponent, FormsModule,CommonModule],
  templateUrl: './example-component.html',
  styleUrl: './example-component.css',
})
export class ExampleComponent {

  firstName = 'Shreyaa';
  lastName = 'Shobhana Ragul'
  city = '';
  location='saravanampatti';
  a=1;
  b=2;


user = {
    name: 'Ragul',
    age: 5
  };

  isDisabled=false;
  textColor='blue';

names= ['shobhana', 'shreyaa' ]

students = 
[
 {name: 'ragul', age:90},
  {name: 'shobhana', age:35},
   {name: 'shreyyaaa', age:5}
]
  

constructor(){
  console.log("Example Constructor....")
}

getLocation(){
  return  this.location;
}

event(eventName:string){
  console.log(eventName+" done!")
  
}
onSubmit(form1: NgForm){
  console.log(form1);
  console.log(form1.value.username+ form1.value.password)
}


}