import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { InvestmentsComponent } from './components/investments/investments.component';
<<<<<<< HEAD
import { InnovationConsultingComponent } from './components/innovation/innovation.component';
=======
import { GalleryComponent } from './components/gallery/gallery.component';
import { CubeComponent } from './components/cube/cube.component';


>>>>>>> 13aea0c64a5cd5f504fab445f9af6cff40071cfc

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup',component:SignupComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'investments',component:InvestmentsComponent},
<<<<<<< HEAD
    {path:'innovation',component:InnovationConsultingComponent},
=======
    {path:'gallery',component:GalleryComponent},
    {path:'cube',component:CubeComponent}

>>>>>>> 13aea0c64a5cd5f504fab445f9af6cff40071cfc
];


