import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = 'Professores';

  professores = [
    {id: 1, name: 'Joao',sobrenome: 'Silva'},
    {id: 2, name: 'José',sobrenome: 'Carvalho'},
    {id: 3, name: 'Ana',sobrenome: 'Silva'},
    {id: 4, name: 'Francisco',sobrenome: 'Pereira'},
    {id: 5, name: 'Raul',sobrenome: 'Santos'},
    {id: 6, name: 'Rui',sobrenome: 'Silva'},
    {id: 7, name: 'Nathan',sobrenome: 'Rodrigues'}
  ]
  
  ngOnInit(): void {}
 
  constructor() {}

}
