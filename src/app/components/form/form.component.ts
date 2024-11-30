import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  onSubmit() {
    alert('Se a enviado el formulario!');
  }
}
