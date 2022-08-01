import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RandomComponent } from './random.component';

const routes: Routes = [{ path: '', component: RandomComponent }];

@NgModule({
  declarations: [RandomComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class RandomModule {}
