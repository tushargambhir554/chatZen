import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {
  form!: UntypedFormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      displayName: new UntypedFormControl('', [Validators.minLength(3)]),
      email: new UntypedFormControl('', [Validators.email]),
      password: new UntypedFormControl('', [Validators.minLength(6)]),
    })
  }

  signUp() {
    this.auth.signUp(this.form.value).subscribe({
      next: () => this.router.navigate(['chat']),
      error: (error) => this.snackbar.open(error.message)
    });
  }

}
