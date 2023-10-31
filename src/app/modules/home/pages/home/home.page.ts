import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';
import { map } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  public pageData: any = [];
  public configData: any = [];
  public formGroup:FormGroup = new FormGroup({});

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getPage();
    this.getConfig();

    this.formGroup = new FormGroup({
      nome: new FormControl( '', {validators: Validators.required}),
      email: new FormControl('', {validators: Validators.required}),
      telefone: new FormControl('', {validators: Validators.required}),
      mensagem: new FormControl('', {validators: Validators.required})
    });
  }

  private getPage() {
    const value = 21; // O valor que você deseja passar para o método getPage
    this.homeService.getPage(value).subscribe(
      {
        next:  (data:any) => {
          this.pageData = data;
          console.log('Dados obtidos:', this.pageData);
         },
        error:  (erro) => {
          console.error(erro)
        }
      }
    )
  }

  private getConfig() {
    const value = 21; // O valor que você deseja passar para o método getPage
    this.homeService.getConfig().subscribe(
      {
        next:  (data:any) => {
          this.configData = data; 
          console.log('Dados obtidos:', this.configData);
         },
        error:  (erro) => {
          console.error(erro)
        }
      }
    );
  }

  private sendMail() {
    const value = 21; // O valor que você deseja passar para o método getPage
    if(this.formGroup.valid){
      this.homeService.sendMail(this.formGroup.value).subscribe(
        {
          next:  (data:any) => {
            this.configData = data; 
            console.log('Dados obtidos:', this.configData);
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
