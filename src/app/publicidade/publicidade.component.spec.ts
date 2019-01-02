import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadeComponent } from './publicidade.component';

describe('PublicidadeComponent', () => {
  let component: PublicidadeComponent;
  let fixture: ComponentFixture<PublicidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
