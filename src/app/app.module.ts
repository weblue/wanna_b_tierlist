import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';



import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { DisclaimersComponent } from './components/disclaimers/disclaimers.component';
import { TableComponent } from './components/table/table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { FilterComponent } from './components/filter/filter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule } from "@angular/material/dialog";
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { CardContentsComponent } from './components/card-contents/card-contents.component';
import {NgcCookieConsentConfig, NgcCookieConsentModule} from "ngx-cookieconsent";
import { OroPageComponent } from './components/oro-page/oro-page.component';
import {CookieService} from "ngx-cookie-service";

//TODO update this styling
const cookieConfig:NgcCookieConsentConfig = {
  "cookie": {
    //TODO update this on deploy; maybe automate it?
    // "domain": "cephalonwannab.com"
    "domain": "localhost"
  },
  "position": "bottom-left",
  "theme": "classic",
  "palette": {
    "popup": {
      "background": "#000000",
      "text": "#ffffff",
      "link": "#ffffff"
    },
    "button": {
      "background": "#f1d600",
      "text": "#000000",
      "border": "transparent"
    }
  },
  "type": "info",
  "content": {
    "message": "We use cookies for analytics and site settings. They are never shared with 3rd parties.\n<br>\n<br>\nPlease whitelist us in your adblocker so we can learn where to improve the site.\n<br>",
    "dismiss": "Got it!",
    "deny": "Refuse cookies",
    "link": "Learn about cookies",
    "href": "https://cookiesandyou.com",
    "policy": "Cookie Policy"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    DisclaimersComponent,
    TableComponent,
    NavbarComponent,
    FooterComponent,
    FaqComponent,
    FilterComponent,
    MainComponent,
    CardContentsComponent,
    OroPageComponent,
  ],
  imports: [
    NgcCookieConsentModule.forRoot(cookieConfig),
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatButtonToggleModule,
    FormsModule,
    AppRoutingModule,
    MatExpansionModule,
    MatExpansionModule,
    ReactiveFormsModule,
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
