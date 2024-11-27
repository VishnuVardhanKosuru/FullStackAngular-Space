import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private signupService: SignupService
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      destination: ['', Validators.required],
      budget: ['', Validators.required],
      paymentPreference: ['', Validators.required],
      preferredSlot: ['', Validators.required],
      additionalInfo: [''],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.signupService.registerUser(this.signupForm.value).subscribe({
        next: (response: any) => {
          console.log('Signup successful:', response);
        },
        error: (error: any) => {
          console.error('Error during signup:', error);
        }
      });
    }
  }
}