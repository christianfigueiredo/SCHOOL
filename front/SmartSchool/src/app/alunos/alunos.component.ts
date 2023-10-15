import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

 public titulo = 'Alunos';
  alunos = [
    {id: 1, name: 'Marta',sobrenome: 'Silva'},
    {id: 2, name: 'Paula',sobrenome: 'Carvalho'},
    {id: 3, name: 'Ana',sobrenome: 'Silva'},
    {id: 4, name: 'Joaquim',sobrenome: 'Pereira'},
    {id: 5, name: 'Pedro',sobrenome: 'Santos'},
    {id: 6, name: 'Carla',sobrenome: 'Silva'},
    {id: 7, name: 'Joana',sobrenome: 'Rodrigues'},    
  ]
  constructor() { }

  ngOnInit(): void {}

}
