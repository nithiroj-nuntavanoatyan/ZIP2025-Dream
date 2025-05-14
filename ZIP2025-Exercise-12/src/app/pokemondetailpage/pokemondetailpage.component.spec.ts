import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemondetailpageComponent } from './pokemondetailpage.component';

describe('PokemondetailpageComponent', () => {
  let component: PokemondetailpageComponent;
  let fixture: ComponentFixture<PokemondetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemondetailpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemondetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
