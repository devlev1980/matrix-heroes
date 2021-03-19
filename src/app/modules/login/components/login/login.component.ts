import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  Optional,
} from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { LoginFormService } from '../../services/login-form.service';
import { LoginService } from '../../services/login.service';
import { Subject } from 'rxjs';
import { CoachService } from '../../../../shared/services/coach.service';

@Component({
  selector: 'yl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CoachService],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  showWrongMessage: boolean = false;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private loginFormService: LoginFormService,
    private auth: LoginService,
    private coachService: CoachService
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
    console.log('Instance', this.coachService);
    this.coachService.sendData(this.username.value);
    this.auth.login(this.loginForm.value).subscribe((result) => {
      if (!result) {
        this.showWrongMessage = true;
      }
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
