import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: 'heroe/:heroName', component: HeroeComponent},
    { path: 'search/:term', component: SearchComponent},
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);