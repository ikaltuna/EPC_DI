import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RankingHomePage } from './rankingHome.page';

describe('RankingHomePage', () => {
  let component: RankingHomePage;
  let fixture: ComponentFixture<RankingHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RankingHomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RankingHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
