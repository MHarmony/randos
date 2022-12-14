import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add.component';

const routes: Routes = [{ path: '', component: AddComponent }];

@NgModule({
  declarations: [AddComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AddModule {}
