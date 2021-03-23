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
import { takeUntil } from 'rxjs/operators';
import { LogService } from '../../../../shared/services/log.service';
import { LocalStorageService } from '../../../../shared/services/local-storage.service';
import { Router } from '@angular/router';

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
    private logger: LogService,
    private lsService: LocalStorageService,
    private router: Router
  ) {}

  /**
   * Initialize form
   */
  ngOnInit(): void {
    this.loginForm = this.loginFormService.initializeForm();
  }

  /**
   * Get username control
   */
  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  /**
   * Get password control
   */
  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  /**
   * Click on 'Login button' in form
   */
  onLogin(): void {
    this.logger.debug('Click on login', 'Login');
    this.auth
      .login(this.loginForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.lsService.setState('userToken', this.loginForm.value);
        this.logger.debug('Result from server on Login', 'Login', result);

        if (!result) {
          this.showWrongMessage = true;
        }
      });
  }

  /**
   * Unsubscribe from observable
   */
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
