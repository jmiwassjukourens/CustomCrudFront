import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterOutlet,RouterLink], // Se agrega RouterModule para manejar rutas
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CustomCrudFront';
  isMenuActive = false;
  isDesktop: boolean = window.innerWidth > 768;
  showParagraph = this.isDesktop;
  showLogo = this.isDesktop;
  putbr = this.isDesktop;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) {
      this.isMenuActive = false;
      this.showParagraph = true;
      this.showLogo = true;
      this.putbr = true;
    } else {
      this.showParagraph = false;
      this.showLogo = false;
      this.putbr = false;
    }
  }

  expandedIndex: number | null = null;

  toggleService(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
