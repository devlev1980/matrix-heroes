import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { LoginFormService } from '../../services/login-form.service';
import { LoginService } from '../../services/login.service';
import { Subject } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { NGXLogger } from 'ngx-logger';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'yl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  showWrongMessage: boolean = false;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private loginFormService: LoginFormService,
    private auth: LoginService,
    private logger: NGXLogger
  ) {}

  ngOnInit(): void {
    this.loginForm = this.loginFormService.initializeForm();
  }
  get username(): AbstractControl {
    return this.loginForm.get('username');
  }
  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  onLogin(): void {
    this.auth
      .login(this.loginForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (!result) {
          this.showWrongMessage = true;
        }
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
