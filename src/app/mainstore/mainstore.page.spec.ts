import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainstorePage } from './mainstore.page';

describe('MainstorePage', () => {
  let component: MainstorePage;
  let fixture: ComponentFixture<MainstorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainstorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainstorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
