import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FaqComponent} from "./components/faq/faq.component";
import {MainComponent} from "./components/main/main.component";
import {OroPageComponent} from "./components/oro-page/oro-page.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'oro', component: OroPageComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
