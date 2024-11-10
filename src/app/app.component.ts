import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CalculatorService]
})
export class AppComponent {
  num1 = 10;
  num2 = 5;
  resultado: number = 0;

  constructor(private calculatorService: CalculatorService) {}

  somar() {
    this.resultado = this.num1 + this.num2;
  }

  subtrair() {
    this.resultado = this.calculatorService.subtrair(this.num1, this.num2);
  }

  dividir() {
    try {
      this.resultado = this.calculatorService.dividir(this.num1, this.num2);
    } catch (error: any) {
      console.error(error?.message || 'Erro ao dividir');
    }
  }

  multiplicar() {
    this.resultado = this.calculatorService.multiplicar(this.num1, this.num2);
  }
}
