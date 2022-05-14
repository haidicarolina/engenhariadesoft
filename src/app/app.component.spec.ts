import { HttpClient, HttpHandler } from '@angular/common/http';
import { AppService } from './app.service';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
          HttpClient,
          HttpHandler
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Testa calculo de integridade', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.calculaIntegridade(0.25,0.5)).toBe('0.88');
  });

  it('Testa calculo de SMI', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.calculaSMI(10, 2, 2, 2)).toBe('0.40');
  });

  it('Testa calculo de volume do programa', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.calculaVolumePrograma(3,2)).toBe('15.68');
  });

  it('Testa calculo de volume minimo do algoritmo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.calculaVolumeMinimoDoAlgoritmo(3,2,6)).toBe('0.22');
  });

  it('Testa porcentagem de assertivas passando', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.calculaAssertivasComSucesso(5,10)).toBe('50');
  });

  it('Testa porcentagem de assertivas falhando', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.calculaAssertivasComSucesso(8,10)).toBe('80');
  });

  it('Testa quantidade de testes de aceitação por funcionalidade', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.calculaTesteAceitacaoFuncionalidade(10,5)).toBe('5');
  });

  it('Testa fator de teste', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.calculaFatorDeTeste(100,'', '', 1000)).toBe('5');
  });

  it('Testa quantidade de casos de teste', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.calculaQtdCasoDeTeste(100,'', '', 1000)).toBe('5');
  });

  it('Testa quantidade de assertivas', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.calculaQtdCasoDeAssertivas(100,'', '', 1000)).toBe('5');
  });
});
