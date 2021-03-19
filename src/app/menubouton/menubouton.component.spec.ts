import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuboutonComponent } from './menubouton.component';

describe('MenuboutonComponent', () => {
  let component: MenuboutonComponent;
  let fixture: ComponentFixture<MenuboutonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuboutonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuboutonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
