import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {

  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private auth: AuthService, private fb: FormBuilder) {  
  }

  login(formDirective: any) {
    console.log(this.form.value);
    this.auth.login(this.form.value);

    formDirective.resetForm();
  }

}
