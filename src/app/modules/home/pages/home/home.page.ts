import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';
import { map } from 'rxjs';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Utils } from 'src/app/core/utils';
import { Loja } from 'src/app/core/interface/loja';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  public pageData: any = [];
  public lojaList: Loja[] | null = null;
  public configData: any = [];
  public formGroup:FormGroup = new FormGroup({});
  private formBuilder: FormBuilder = new FormBuilder();
  public searchTerm: string = '';

  constructor(private homeService: HomeService,protected util:Utils) {}

  ngOnInit(): void {
    this.getPage();
    this.getConfig();
    this.getLoja();

    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      remetente: ['', Validators.required],
      telefone: ['', Validators.required],
      mensagem: ['', Validators.required]
    });
  }

  private getPage() {
    const value = 21; // O valor que você deseja passar para o método getPage
    this.homeService.getPage(value).subscribe(
      {
        next:  (data:any) => {
          this.pageData = data;
         // console.log('Dados obtidos:', this.pageData);
         },
        error:  (erro) => {
          console.error(erro)
        }
      }
    )
  }

  private getConfig() {
  
    this.homeService.getConfig().subscribe(
      {
        next:  (data:any) => {
          this.configData = data; 
         // console.log('Dados obtidos:', this.configData);
         },
        error:  (erro) => {
          console.error(erro)
        }
      }
    );
  }

  public getLoja() {

    if (this.searchTerm.length >= 3 || this.searchTerm.length == 0) {
      console.log('Buscando loja:', this.searchTerm);
      this.homeService.getLoja(this.searchTerm).subscribe(
        {
          next:  (data:any) => {
            this.lojaList = data;
            console.log('Dados obtidos:', this.lojaList);
           },
          error:  (erro) => {
            console.error(erro)
          }
        }
      )
    }

  }

  public sendMail() {

    if(this.formGroup.valid){
      this.homeService.sendMail(this.formGroup.value).subscribe(
        {
          next:  (data:any) => {
            //console.log('Dados obtidos:', data.message);
            this.util.exibirSucesso(data.message);
            
           },
          error:  (erro) => {
            console.error(erro)
          }
        }
      );
    }else{
      console.log('Formulário inválido');
    }
  }
  
}
