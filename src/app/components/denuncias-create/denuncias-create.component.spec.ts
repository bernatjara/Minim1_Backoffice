import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciasCreateComponent } from './denuncias-create.component';

describe('DenunciasCreateComponent', () => {
  let component: DenunciasCreateComponent;
  let fixture: ComponentFixture<DenunciasCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DenunciasCreateComponent]
    });
    fixture = TestBed.createComponent(DenunciasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
