import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  change_theme(): void {
    const currentTheme = document.body.classList.contains('bright-theme')
      ? 'bright-theme'
      : 'dark-theme';
    const newTheme =
      currentTheme === 'bright-theme' ? 'dark-theme' : 'bright-theme';

    localStorage.setItem('mode', newTheme);

    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
  }
}
