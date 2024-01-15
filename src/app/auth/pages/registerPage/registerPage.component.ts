import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>registerPage works!</p>`,
  styleUrl: './registerPage.component.css'
})
export class RegisterPageComponent { }
