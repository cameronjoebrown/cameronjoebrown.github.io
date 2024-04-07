import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        AboutMeComponent
    ],
    imports: [BrowserModule, AppRoutingModule, NgbModule, FontAwesomeModule, NgOptimizedImage],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
