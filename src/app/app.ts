import { Component, signal } from '@angular/core';
import { ExampleComponent } from './components/example-component/example-component';
import { FeatureComponent } from './components/feature-component/feature-component';

import { TestComponent } from './components/test-component/test-component';
import { RouterModule , Routes, RouterOutlet, RouterLink} from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';








@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, RouterLink,
    ExampleComponent, FeatureComponent
  ],
  templateUrl: './app.html',
//  template :'HELLLOOOOO',
//   template: `
//     <h1>Main Component</h1>

//     <nav>
//       <a routerLink="/feature">Feature</a> |
//       <a routerLink="/test">Test</a>
//     </nav>

//     <router-outlet></router-outlet>

// `
  
})
export class App {
//  protected readonly title = signal('my-angular-app rgrgtrrgdfg');

title = 'title'



constructor(){
  console.log("Main COnstructor....")
}
}


bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});
