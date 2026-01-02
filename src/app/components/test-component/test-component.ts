import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  imports: [],
  template:'Test component is loaded'

})
export class TestComponent {
constructor(){
  console.log("Test COnstructor....")
}
}
