import { Component, OnInit, NgZone, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';


interface CarouselItem {
  id: number;
  title: string;
  imageUrl: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  items: CarouselItem[] = [
    { 
      id: 1, 
      title: 'Quantum Propulsion Engine | NovaSphere Leading the Future', 
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1744&auto=format&fit=crop' 
    },
    { 
      id: 2, 
      title: 'Solar Shield Array - 99.9% Energy Efficiency | NovaSphere Innovation', 
      imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1744&auto=format&fit=crop' 
    },
    { 
      id: 3, 
      title: 'Mars Habitat Pods - Sustaining Life | NovaSphere Colonization Tech', 
      imageUrl: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1740&auto=format&fit=crop' 
    },
    { 
      id: 4, 
      title: 'Neural Space Navigation AI | NovaSphere Intelligence Systems', 
      imageUrl: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?q=80&w=1740&auto=format&fit=crop' 
    },
    { 
      id: 5, 
      title: 'Zero-G Manufacturing Plant | NovaSphere Industrial Solutions', 
      imageUrl: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1680&auto=format&fit=crop' 
    },
    { 
      id: 6, 
      title: 'Asteroid Mining Drone Fleet | NovaSphere Resource Division', 
      imageUrl: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1671&auto=format&fit=crop' 
    },
    { 
      id: 7, 
      title: 'Deep Space Communication Array | NovaSphere Network Systems', 
      imageUrl: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1740&auto=format&fit=crop' 
    },
    { 
      id: 8, 
      title: 'Orbital Energy Collection Grid | NovaSphere Power Solutions', 
      imageUrl: 'https://images.unsplash.com/photo-1445905595283-21f8ae8a33d2?q=80&w=1773&auto=format&fit=crop' 
    },
    { 
      id: 9, 
      title: 'Lunar Gateway Station | NovaSphere Transit Hub', 
      imageUrl: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=1772&auto=format&fit=crop' 
    },
    { 
      id: 10, 
      title: 'Bio-Regenerative Life Support | NovaSphere Sustainability', 
      imageUrl: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1740&auto=format&fit=crop' 
    }
  ];

  currentIndex = 0;
  radius = 600; // Increased for better spacing
  private animationFrame: number | null = null;
  private isBrowser: boolean;

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.startAnimation();
    }
  }

  ngOnDestroy() {
    this.stopAnimation();
  }

  private startAnimation() {
    this.ngZone.runOutsideAngular(() => {
      const animate = () => {
        this.animationFrame = window.requestAnimationFrame(animate);
      };
      this.animationFrame = window.requestAnimationFrame(animate);
    });
  }

  private stopAnimation() {
    if (this.animationFrame !== null && this.isBrowser) {
      window.cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  getTransform(index: number): string {
    if (index === this.currentIndex) {
      return 'translate3d(0, 0, 200px) scale(1.5)';
    }

    const totalItems = this.items.length;
    const angleStep = (2 * Math.PI) / (totalItems - 1); 
    let angle = 0;
    
    if (index < this.currentIndex) {
      angle = angleStep * index;
    } else if (index > this.currentIndex) {
      angle = angleStep * (index - 1);
    }

    const x = Math.sin(angle) * this.radius;
    const z = (Math.cos(angle) * this.radius) - this.radius;
    
    return `translate3d(${x}px, 0, ${z}px) scale(0.6)`;
  }

  getOpacity(index: number): number {
    if (index === this.currentIndex) return 1;
    const distanceFromCurrent = Math.abs(index - this.currentIndex);
    return Math.max(0.3, 1 - (distanceFromCurrent * 0.2));
  }

  getZIndex(index: number): number {
    return index === this.currentIndex ? 1000 : 500 - Math.abs(index - this.currentIndex);
  }

  next() {
    this.ngZone.run(() => {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    });
  }

  prev() {
    this.ngZone.run(() => {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    });
  }
}
