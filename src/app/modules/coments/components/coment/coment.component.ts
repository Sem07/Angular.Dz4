import {Component, Input, OnInit} from '@angular/core';
import { Coments } from '../../Comments';


@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.css']
})
export class ComentComponent {
  @Input() 
  coments: Coments;

  constructor() { }

  ngOnInit(): void {
  }

}
