import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  //exercicio 2
  it('deve retornar o resultado correto da subtração', () => {
    const resultado = service.subtrair(10, 5);
    expect(resultado).toBe(5);
  });

  //exercicio 3
  it('deve retornar o resultado correto da multiplicação', () => {
    const resultado = service.multiplicar(10, 5);
    expect(resultado).toBe(50);
  });
  
  //exercicio 4
  it('deve retornar o resultado correto da divisão', () => {
    const resultado = service.dividir(10, 2);
    expect(resultado).toBe(5);
  });
  
  //exercicio 5
  it('deve lançar um erro ao dividir por zero', () => {
    expect(() => service.dividir(10, 0)).toThrowError('Divisão por zero');
  });
  
});
