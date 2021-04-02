import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerConfComponent } from './player-conf.component';

describe('PlayerConfComponent', () => {
  let component: PlayerConfComponent;
  let fixture: ComponentFixture<PlayerConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerConfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
