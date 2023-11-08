import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciasUserComponent } from './denuncias-user.component';

describe('DenunciasUserComponent', () => {
  let component: DenunciasUserComponent;
  let fixture: ComponentFixture<DenunciasUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DenunciasUserComponent]
    });
    fixture = TestBed.createComponent(DenunciasUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
