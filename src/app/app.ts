import { Component} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <h1>Accueil</h1>
        </header>
      </a>
      <section class="content">
        <router-outlet />
      </section>
    </main>
  `
})
export class App {
  title = 'trainings';
}
