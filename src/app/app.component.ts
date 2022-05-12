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

  constructor(public appService: AppService) {

  }

  soma(n1, n2) {
    return n1 + n2;
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
