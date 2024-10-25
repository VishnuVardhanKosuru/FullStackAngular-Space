// testimonials.component.ts
import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

interface Testimonial {
  text: string;
  name: string;
  position: string;
  avatar: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    {
      text: "SpaceCo gave me a once-in-a-lifetime opportunity to experience space. As an actor preparing for my next film, I wanted to feel the thrill of weightlessness and witness the vastness of space firsthand. The journey was absolutely exhilarating, and Space Co made it all possible with their seamless planning and expert training. Truly a memorable experience!",
      name: "Allu Arjun",
      position: "Actor, India",
      avatar: "https://th.bing.com/th/id/OIP.kgKcvmPg1ZfyK0cC48o_1wHaFj?rs=1&pid=ImgDetMain"
    },
    {
      text: "Ever since I was a child, I dreamt of seeing Earth from space. Space Co helped me turn that dream into reality. Looking down at our planet from the stars was both humbling and inspiring, and the entire experience was smooth and well-coordinated. I highly recommend Space Co for anyone who wants to fulfill their space dreams.",
      name: "Taehyung",
      position: " Founder of Cofeeco, South Korea",
      avatar: "https://i.pinimg.com/originals/24/66/b4/2466b45b16f605a4c2ad34f0879c396c.jpg"
    },
    {
      text: "SpaceCo represents the cutting edge of human ambition and technological prowess. It offers a unique blend of education, adventure, and inspiration, making space travel accessible to a wider audience. I applaud their efforts in promoting global collaboration through the wonders of space exploration",
      name: "Dr. S. Jaishankar",
      position: "Minister of External Affairs, India",
      avatar: "https://images.hindustantimes.com/img/2021/05/20/1600x900/e6be0de6-a12d-11eb-8d24-b84f56b29779_1618858262147_1621487441330.jpg"
    },
    {
      text: "Space Co is about more than just space travel; it’s about giving people a chance to connect with something bigger than themselves. The journey not only fulfilled my curiosity about space but also deepened my commitment to using my platform for the good of humanity. The view of our beautiful planet was a reminder of how precious it is and how much we need to protect it.",
      name: "Beyoncé",
      position: "Philanthropist, USA",
      avatar: "https://www.billboard.com/wp-content/uploads/2022/06/Beyonce-cr-Courtesy-of-Parkwood-Entertainment-press-2022-billboard-1548.jpg"
    }
  ];

  currentIndex = 0;
  private autoplayInterval: any;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.startAutoplay();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      this.stopAutoplay();
    }
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextTestimonial();
    }, 5000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToTestimonial(index: number) {
    this.currentIndex = index;
  }
}