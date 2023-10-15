import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos = [
    {id: 1, name: 'Marta'},
    {id: 2, name: 'Paula'},
    {id: 3, name: 'Ana'},
    {id: 4, name: 'Joaquim'},
    {id: 5, name: 'Pedro'},
    {id: 6, name: 'Carla'},
    {id: 7, name: 'Joana'}    
  ]
  constructor() { }

  ngOnInit(): void {}

}
