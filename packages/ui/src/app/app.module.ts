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
        },
        {
          path: 'settings',
          loadChildren: () =>
            import('./settings/settings.module').then((m) => m.SettingsModule)
        },
        {
          path: 'add',
          loadChildren: () => import('./add/add.module').then((m) => m.AddModule)
        },
        {
          path: 'random',
          loadChildren: () =>
            import('./random/random.module').then((m) => m.RandomModule)
        },
        {
          path: '**',
          loadChildren: () =>
            import('./not-found/not-found.module').then((m) => m.NotFoundModule)
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
