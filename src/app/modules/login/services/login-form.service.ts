import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../../../shared/custom-validators/password-validator';

@Injectable({
  providedIn: 'root',
})
export class LoginFormService {
  constructor(private fb: FormBuilder) {}

  initializeForm(): FormGroup {
    return this.fb.group({
      username: ['Tom', Validators.required],
      password: ['Asdfghjk123$', [Validators.required, passwordValidator]],
    });
  }
}
