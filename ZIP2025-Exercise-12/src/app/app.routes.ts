import { Routes } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { PokemoncardComponent } from './pokemoncard/pokemoncard.component';
import { PokemondetailpageComponent } from './pokemondetailpage/pokemondetailpage.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home/pokemon', pathMatch: 'full'

    }, {
        path: 'home/pokemon', component:PokemoncardComponent
    }, {
        path: 'home/pokemon/:id', component: PokemondetailpageComponent
    }, {
        path: '**',
        component: ErrorpageComponent,
    }
];
