import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent, CommonModule, CardComponent, FormComponent],
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
