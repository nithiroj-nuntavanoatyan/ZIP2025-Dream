import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemoncard',
  imports: [RouterLink],
  templateUrl: './pokemoncard.component.html',
  styleUrl: './pokemoncard.component.scss'
})
export class PokemoncardComponent {
  pokemonId = [{ id: '1', name: 'Pikachu ', firsttype: 'Electric', secondtype: '', imgsrc: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png' },
  { id: '2', name: 'Gengar', firsttype: 'Ghost', secondtype: 'Poison', imgsrc: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/094.png' },
  { id: '3', name: 'Snorlax', firsttype: 'Normal', secondtype: '', imgsrc: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/143.png' },
  { id: '4', name: 'Charlizard', firsttype: 'Fire', secondtype: 'Flying', imgsrc: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png' },
  { id: '5', name: 'Rayquaza', firsttype: 'Dragon', secondtype: 'Flying', imgsrc: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/384.png' },
  { id: '6', name: 'Machamp', firsttype: 'Fighting', secondtype: '', imgsrc: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/068.png' },
  { id: '7', name: 'Groudon', firsttype: 'Ground', secondtype: '', imgsrc: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/383.png' },
  { id: '8', name: 'Mewtwo', firsttype: 'Psychic', secondtype: '', imgsrc: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/150.png' },
  { id: '9', name: 'Gyarados', firsttype: 'Water', secondtype: 'Flying', imgsrc: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/130.png' },
  { id: '10', name: 'Ditto', firsttype: 'Normal', secondtype: '', imgsrc: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/132.png' }];
}
