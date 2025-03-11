import { CommonModule, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  imports: [FormsModule, CommonModule, NgIf,ReactiveFormsModule],
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  userForm: FormGroup;
  successMessage: string = '';
  isEditMode: boolean = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(7)]],
      roles: this.fb.group({
        admin: [false],
        user: [false]
      })
    });
  }

  ngOnInit() {
    // Verifica si existe un parámetro `id` en la ruta
    const id = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!id; // Será `true` si hay un ID en la URL

    if (this.isEditMode) {
      this.userForm.removeControl('password');
    } else {
      this.userForm.addControl('password', this.fb.control('', [
        Validators.required, 
        Validators.minLength(7), 
        Validators.maxLength(15),
        Validators.pattern('(?=.*[!@#$%^&*])')
      ]));
    }
  }

  submit() {
    if (this.userForm.valid) {
      console.log(this.isEditMode ? 'Updating user...' : 'Creating user...', this.userForm.value);
    } else {
      console.log('Invalid form');
    }
  }
}
