import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publicidade',
  templateUrl: './publicidade.component.html',
  styleUrls: ['./publicidade.component.scss']
})
export class PublicidadeComponent implements OnInit {
  @Input() imagem: string;

  constructor() { }

  ngOnInit() {
  }

}
