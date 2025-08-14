import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, Home ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  title = 'projeto-estudo-angular';
}
