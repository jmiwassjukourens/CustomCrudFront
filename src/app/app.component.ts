import { Component } from '@angular/core';
import { UserComponent } from './components/users/user.component';
import { FormUserComponent } from './components/form-user/form-user.component';


@Component({
  selector: 'app-root',
  imports: [UserComponent,FormUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CustomCrudFront';
}
