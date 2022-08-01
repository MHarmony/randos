import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
        }
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    RippleModule,
    LayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
