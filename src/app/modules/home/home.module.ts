import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PasswordStrengthComponent } from 'src/app/shared/password-strength/password-strength.component';
import { HomePage } from './pages/home/home.page';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    PasswordStrengthComponent,
    HomePage
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
  constructor() {
  }
 }
