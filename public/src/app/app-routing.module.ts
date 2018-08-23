import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent} from './edit/edit.component'
import { NewComponent } from './new/new.component'
import { OneComponent } from './one/one.component'
import { AllComponent } from './all/all.component'
const routes: Routes = [
  {path:"products",pathMatch:"full", component: AllComponent},
  {path:"products/edit/:id", component: EditComponent},
  {path:"products/:id",component: OneComponent},
  { path:"new/products" ,component: NewComponent },
  {path:"**",redirectTo:"products"},
  // path:"**",
  // component: AllComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
