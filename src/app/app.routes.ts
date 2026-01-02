import { Routes } from '@angular/router';
import { ExampleComponent } from './components/example-component/example-component';
import { TestComponent } from './components/test-component/test-component';
import { FeatureComponent } from './components/feature-component/feature-component';


export const routes : Routes = [
  
   {path:'feature', component:FeatureComponent},
    {path:'test',component: TestComponent}

]