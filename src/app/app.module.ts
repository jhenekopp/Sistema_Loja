import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {AppRoutes} from './app.routes';
import {AppComponent} from './app.component';
import {AppMenuComponent} from './app.menu.component';
import {AppSubMenuComponent} from './app.menu.component';
import {AppTopBarComponent} from './app.topbar.component';
import {AppFooterComponent} from './app.footer.component';

import { ScrollPanelModule } from 'primeng/scrollpanel';

import { HttpClientModule } from '@angular/common/http';
import { NgxViacepModule } from '@brunoc/ngx-viacep';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutes,
        BrowserAnimationsModule,
        HttpClientModule,
        ScrollPanelModule,
        NgxViacepModule
    ],
    declarations: [
        AppComponent,
        AppMenuComponent,
        AppSubMenuComponent,
        AppTopBarComponent,
        AppFooterComponent,
    ],
    providers: [
        {
            provide: LocationStrategy, 
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
