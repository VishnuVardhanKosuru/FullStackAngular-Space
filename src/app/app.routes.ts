import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { InvestmentsComponent } from './components/investments/investments.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CubeComponent } from './components/cube/cube.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup',component:SignupComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'investments',component:InvestmentsComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'cube',component:CubeComponent}

];


