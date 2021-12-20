import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material.module';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeroComponent } from './pages/hero/hero.component';
import { AboutComponent } from './pages/about/about.component';
import { GameplayComponent } from './pages/gameplay/gameplay.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LayoutComponent, FooterComponent, HeroComponent, AboutComponent, GameplayComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule], //might import formsModule later on
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
