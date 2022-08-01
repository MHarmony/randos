import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import { NotFoundComponent } from './not-found.component';

const routes: Routes = [{ path: '', component: NotFoundComponent }];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, RouterModule.forChild(routes), RippleModule, ButtonModule]
})
export class NotFoundModule {}
