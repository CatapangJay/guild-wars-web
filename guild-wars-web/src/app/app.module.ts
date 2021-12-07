import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { HeroComponent } from './pages/hero/hero.component';
import { LayoutComponent } from './layout/layout.component';
import { CustomButtonComponent } from './shared/components/custom-button/custom-button.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroComponent, LayoutComponent, CustomButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
