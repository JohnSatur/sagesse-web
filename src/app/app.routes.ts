import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { OfferComponent } from './pages/offer/offer.component';
import { EnrollmentComponent } from './pages/enrollment/enrollment.component';
import { StudentLifeComponent } from './pages/student-life/student-life.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'quienes-somos', component: AboutComponent },
    { path: 'oferta-educativa', component: OfferComponent },
    { path: 'admisiones', component: EnrollmentComponent },
    { path: 'vida-estudiantil', component: StudentLifeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contacto', component: ContactComponent },
    { path: '**', redirectTo: '' }
];
