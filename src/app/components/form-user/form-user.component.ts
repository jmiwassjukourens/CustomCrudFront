import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  imports: [FormsModule, CommonModule, NgIf,ReactiveFormsModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {
  userForm: FormGroup;
  successMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      roles: this.fb.group({
        admin: [false],
        user: [false]
      })
    });
  }

  submit() {
    if (this.userForm.valid) {
      const formValues = this.userForm.value;
      const selectedRoles = [];
      if (formValues.roles.admin) selectedRoles.push('ROLE_ADMIN');
      if (formValues.roles.user) selectedRoles.push('ROLE_USER');

      const user = {
        username: formValues.username,
        roles: selectedRoles
      };

      this.successMessage = `User ${user.username} was successfully created`;

      console.log('User created:', user);

      // Clear form after 3 seconds
      setTimeout(() => {
        this.successMessage = '';
        this.userForm.reset();
      }, 3000);
    } else {
      console.log('Invalid form');
    }
  }
}