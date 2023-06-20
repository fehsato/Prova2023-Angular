import { EmpresasService } from './empresas.service';
import { Component, OnInit } from '@angular/core';
import { Empresas } from '../app/empresas';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class EmpresasComponent implements OnInit{

  title = 'ProvaAngular';
  empresas: Empresas[] = [];
  formGroupEmpresas : FormGroup;
  isEditing: boolean = false;

  constructor (private empresasService: EmpresasService, private formBuilder: FormBuilder
    ){
      this.formGroupEmpresas = formBuilder.group({
        id: [''],
        name: [''],
        email: [''],
        endereco: ['']
      });
  }

  ngOnInit(): void {
    this.loadEmpresas();
  }

  loadEmpresas(){
      this.empresasService.getEmpresas().subscribe(
        {
          next: data => this.empresas = data,
          error: msg => console.log("Erro ao chamar o endpont" + msg)
        }
      )
  }
  cadastrar(){
    if(this.isEditing){
      this.empresasService.update(this.formGroupEmpresas.value).subscribe(
        {next: () =>{
          this.loadEmpresas();
          this.formGroupEmpresas.reset();
          this.isEditing = false;
          }
        }
      );
      }
      else{
        this.empresasService.cadastrar(this.formGroupEmpresas.value).subscribe(
          {
            next: data => {
              this.empresas.push(data);
              this.formGroupEmpresas.reset();
            }
          }
        );
      }
  }
}
