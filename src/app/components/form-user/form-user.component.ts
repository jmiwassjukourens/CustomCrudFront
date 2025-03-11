import { CommonModule, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/users/user.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  imports: [FormsModule, CommonModule, NgIf, ReactiveFormsModule],
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  userForm: FormGroup;
  successMessage: string = '';
  isEditMode: boolean = false;
  userId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(7)]],
      roles: this.fb.group({
        admin: [false],
        user: [false]
      }),
      password: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!id;

    if (this.isEditMode && id) {
      this.userId = parseInt(id, 10);
      this.userForm.removeControl('password');
    }
  }

  submit() {
    if (this.userForm.valid) {
      // Obtener los valores del formulario
      const formValue = this.userForm.value;
      
      // Transformar el objeto roles en un arreglo de roles
      const rolesArray = [];
      if (formValue.roles.admin) {
        rolesArray.push({ name: 'ADMIN' }); // Ajusta el objeto según lo que espera tu backend
      }
      if (formValue.roles.user) {
        rolesArray.push({ name: 'USER' });
      }
  
      // Construir el usuario con el arreglo de roles
      const user: User = {
        ...formValue,
        roles: rolesArray
      };
  
      // En modo edición, asignar el id y llamar a update
      if (this.isEditMode && this.userId) {
        user.id = this.userId;
        this.service.update(user).subscribe({
          next: (updatedUser) => {
            this.successMessage = 'Usuario actualizado con éxito';
            console.log('Usuario actualizado:', updatedUser);
            // Redireccionar si es necesario
            this.router.navigate(['/users']);
          },
          error: (err) => {
            console.error('Error al actualizar usuario:', err);
          }
        });
      } else {
        // En modo creación, llamar a create
        this.service.create(user).subscribe({
          next: (newUser) => {
            this.successMessage = 'Usuario creado con éxito';
            console.log('Usuario creado:', newUser);
            // Redireccionar si es necesario
             this.router.navigate(['/users']);
          },
          error: (err) => {
            console.error('Error al crear usuario:', err);
          }
        });
      }
    } else {
      console.log('Formulario inválido');
    }
  }
  
}
