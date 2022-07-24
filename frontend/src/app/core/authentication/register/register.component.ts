import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  form = this.fb.group({
    email: ['', Validators.required], // [initializer, validators...]
    password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$")]]
  })

  constructor(private auth: AuthService, private fb: FormBuilder) {  
  }

  register(formDirective: any) {
    console.log(this.form.value);
    this.auth.register(this.form.value);

    formDirective.resetForm();
  }
}
