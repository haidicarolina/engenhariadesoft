import { AppService } from './app.service';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public operadores;
  public operandos;
  public totalOperadores;
  public mt;
  public fc;
  public fd;
  public fa;
  public ameaca;
  public seguranca;
  public username;
  public repository;
  public informacoes;
  public linhas;
  public linhasBrancas;
  public linhasComentadas;
  public arquivos;
  public linguagem;
  public dataRealFim;
  public dataRealInicio;
  public dataPlanejada;
  public total;
  public totalUnidade;
  public totalFuncionalidade;
  public totalPassando;
  public totalFalhando;
  public totalPassandoUnidade;
  public totalFalhandoUnidade;
  public totalAnterior;
  public totalLinhasDeTeste;
  public totalCasosDeTeste;
  public totalAssertivas;

  constructor(public appService: AppService) {

  }

  calculaVolumePrograma(operadores, operandos): string {
    let N, V: Number;
    N = (operadores * Math.log2(operadores)) + (operandos * Math.log2(operandos));
    V = N * Math.log2(operadores + operandos);

    alert('Volume do programa: ' + V.toFixed(2));
    return V.toFixed(2);
  }

  calculaVolumeMinimoDoAlgoritmo(operadores, operandos, totalOperadores): string {
    let volume: Number;
    volume = (2/operadores) * (operandos/totalOperadores);

    alert('Volume mínimo do algoritmo: ' + volume.toFixed(2));
    return volume.toFixed(2);
  }

  calculaSMI(mt, fc, fd, fa): string {
    let SMI: Number;
    SMI = (mt - (fa + fc + fd)) / mt;
  
    alert('SMI: ' + SMI.toFixed(2));
    return SMI.toFixed(2);
  }

  calculaIntegridade(ameaca, seguranca): string {
    let integridade: Number;
    integridade = 1 - (ameaca * (1 - seguranca));
    
    alert('Integridade: ' + integridade.toFixed(2));
    return integridade.toFixed(2);
  }

  calculaMedidasDeProjeto(dataRealTermino, dataPlanejadaTermino, dataRealInicio): string {
    let resultado: Number;
    let parameter1;
    let parameter2;

    dataRealTermino = new Date(dataRealTermino);
    dataRealInicio = new Date(dataRealInicio);
    dataPlanejadaTermino = new Date(dataPlanejadaTermino);

    parameter1 = (dataRealTermino - dataPlanejadaTermino)/(1000 * 3600 * 24);
    parameter2 = (dataPlanejadaTermino - dataRealInicio)/(1000 * 3600 * 24) ;
    console.log(parameter1);
    console.log(parameter2)
    resultado = (parameter1 * 100) / (parameter2);
    console.log(resultado);
    alert('Medida de projeto: ' + resultado);
    return resultado.toFixed(2);
  }

  calculaFatorDeTeste(totalLinhasTeste, username?: string, repository?: string, totalCodigo?: Number): string {
    let resultado: Number = 0;
    let key;
    if (totalCodigo != 0 && totalCodigo != undefined) {
      this.linhas = totalCodigo;
      resultado = totalLinhasTeste / this.linhas;
    }
    else {
      this.appService.getInformation(username, repository).subscribe(data => {

        this.informacoes = data;
        Object.keys(this.informacoes).forEach(element => {
          key = element;
        });
  
        this.linhas = this.informacoes[key].linesOfCode;
        resultado = totalLinhasTeste / this.linhas;
  
        alert('Fator de teste: ' + resultado.toFixed(2));      
      });  
    }

    return resultado.toFixed(2);
  }

  calculaQtdCasoDeAssertivas(totalAssertivas, username?: string, repository?: string, totalCodigo?:Number): string {
    let resultado: Number = 0;
    let key;

    if (totalCodigo != 0 && totalCodigo != undefined) {
      this.linhas = totalCodigo;
      resultado = totalAssertivas / this.linhas;
    }
    else {
      this.appService.getInformation(username, repository).subscribe(data => {

        this.informacoes = data;
        Object.keys(this.informacoes).forEach(element => {
          key = element;
        });
  
        this.linhas = this.informacoes[key].linesOfCode;
        resultado = totalAssertivas / this.linhas;
  
        alert('Quantidade assertivas: ' + resultado.toFixed(2));      
      });  
    }
    return resultado.toFixed(2);
  }

  calculaQtdCasoDeTeste(totalCasosDeTeste, username?: string, repository?: string, totalCodigo?:Number): string {
    let resultado: Number = 0;
    let key;

    if (totalCodigo != 0 && totalCodigo != undefined) {
      this.linhas = totalCodigo;
      resultado = totalCasosDeTeste / this.linhas;
    }
    else {
      this.appService.getInformation(username, repository).subscribe(data => {

        this.informacoes = data;
        Object.keys(this.informacoes).forEach(element => {
          key = element;
        });
  
        this.linhas = this.informacoes[key].linesOfCode;
        resultado = totalCasosDeTeste / this.linhas;
  
        alert('Quantidade casos de teste: ' + resultado.toFixed(2));      
      });  
    }
    
    return resultado.toFixed(2);
  }

  calculaAssertivasComSucesso(assertivasSucesso, assertivasTotal): string {
    let resultado: Number;
    resultado = (assertivasSucesso/assertivasTotal) * 100;
    
    alert('% Assertivas com sucesso: ' + resultado);
    return resultado.toFixed(2);
  }

  calculaAssertivasComFalha(assertivasFalha, assertivasTotal) {
    let resultado: Number;
    resultado = (assertivasFalha/assertivasTotal) * 100;
    alert('% Assertivas com falha: ' + resultado);
    return resultado.toFixed(2);
  }

  calculaTesteAceitacaoFuncionalidade(total, totalAnterior): string {
    let TTA: Number;

    TTA = total - totalAnterior;

    alert('Número de casos de teste de aceitação na iteração i ' + TTA);

    return TTA.toString();
  }

  locApi (username, repository) {
    this.appService.getInformation(username, repository).subscribe(data => {
      this.informacoes = data;
      this.linguagem = this.informacoes[0].language;
      this.linhas = this.informacoes[0].linesOfCode;
      this.linhasBrancas = this.informacoes[0].blanks;
      this.linhasComentadas = this.informacoes[0].comments;
      this.arquivos = this.informacoes[0].files;
    });
  }


}
