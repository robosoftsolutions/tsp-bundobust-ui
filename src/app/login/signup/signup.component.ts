import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';
import { signupModel } from 'src/app/Models/signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup
  signupModel: signupModel[] = []
  bundobustSignup: any;

  constructor(private router: Router, private service: SignupService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      commissionerate: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      SDPO: new FormControl('', Validators.required),
      division: new FormControl('', Validators.required),
      circle: new FormControl('', Validators.required),
      policeStation: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required)
    });
  }

  signup() {
    this.bundobustSignup = {
      firstName: this.registerForm.get('firstName').value,
      lastName: this.registerForm.get('lastName').value,
      role: this.registerForm.get('role').value,
      commissionerate: this.registerForm.get('commissionerate').value,
      district: this.registerForm.get('district').value,
      SDPO: this.registerForm.get('SDPO').value,
      division: this.registerForm.get('division').value,
      circle: this.registerForm.get('circle').value,
      policeStation: this.registerForm.get('policeStation').value,
      email: this.registerForm.get('email').value,
      id: this.registerForm.get('id').value,
      password: this.registerForm.get('password').value,
      // confirmpassword: this.registerForm.get('confirmpassword').value,
    }
    this.service.userRegister(this.bundobustSignup).subscribe(data => {
      console.log(data)
    });
    this.router.navigateByUrl("/signin")
  }

}
