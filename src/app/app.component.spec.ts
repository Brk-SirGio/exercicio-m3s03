import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatorService } from '../services/calculator.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, AppComponent],
      providers: [CalculatorService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve somar corretamente os números e atualizar o resultado', () => {
    component.num1 = 10;
    component.num2 = 5;
    component.somar();
    expect(component.resultado).toBe(15);
  });

  it('deve atualizar num1 e num2 via ngModel corretamente', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const input1 = compiled.querySelector('input[name="num1"]') as HTMLInputElement;
    const input2 = compiled.querySelector('input[name="num2"]') as HTMLInputElement;

    input1.value = '20';
    input2.value = '10';
    input1.dispatchEvent(new Event('input'));
    input2.dispatchEvent(new Event('input'));

    expect(component.num1).toBe(20);
    expect(component.num2).toBe(10);
  });
});
