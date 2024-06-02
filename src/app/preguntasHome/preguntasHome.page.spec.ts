import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreguntasHomePage } from './preguntasHome.page';

describe('PreguntasHomePage', () => {
  let component: PreguntasHomePage;
  let fixture: ComponentFixture<PreguntasHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreguntasHomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreguntasHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
