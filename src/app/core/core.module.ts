import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule, MatListModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthGuardService } from './auth-guard/auth-guard.service';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [TopMenuComponent, LeftMenuComponent],
  exports: [TopMenuComponent, LeftMenuComponent],
  providers: [AuthGuardService]
})
export class CoreModule { }
