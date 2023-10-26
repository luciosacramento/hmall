import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  pageData: any = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getPage();
  }

  private getPage() {
    const value = 21; // O valor que você deseja passar para o método getPage
    this.homeService.getPage(value).subscribe(
      data => {
        this.pageData = data; // Atribua os dados obtidos à variável eventosList
        console.log('Dados obtidos:', this.pageData); // Você pode fazer o que quiser com os dados aqui
      },
      error => {
        console.error('Erro ao obter dados:', error); // Lidar com erros, se houver
      }
    );
  }
  
}
