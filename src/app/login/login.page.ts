import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Importar Router

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router  // Inyectar Router en el constructor
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario válido', this.loginForm.value);
      // Lógica para iniciar sesión (puede ser una llamada a una API de autenticación)

      // Redirigir a la página home después de un inicio de sesión exitoso
      this.router.navigate(['/home']);
    } else {
      console.log('Formulario inválido');
    }
  }
  navigateToRecuperacion() {
    this.router.navigate(['/recuperacion']);
  }
}
