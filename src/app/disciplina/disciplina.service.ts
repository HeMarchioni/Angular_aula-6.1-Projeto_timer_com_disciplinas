import { Injectable } from '@angular/core';

import {Disciplina} from "./disciplina";

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  constructor() {
  }

  getList() {
    return this.Disciplina;
  }

  add(name: string) {
    this.Disciplina.push({name})
  }

  delete(indice: number) {
    this.Disciplina.splice(indice, 1);
  }


private Disciplina: Disciplina[] = [
    {
      name: 'Desenvolvimento para Servidores II'
    },
    {
      name: 'Desenvolvimento para dispositivos móveis I'
    },
    {
      name: 'Inglês V'
    },
    {
      name: 'Negócios e Marketing Eletrônicos'
    },
    {
      name: 'Projeto de prototipagem e testes de Usabilidade'
    },
    {
      name: 'Projeto do trabalho de graduação em Sistemas'
    },
    {
      name: 'Tópicos Especiais em Sistemas para Internet II'
    },
  ];
}