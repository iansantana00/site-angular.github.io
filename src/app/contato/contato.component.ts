import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  formContato = this.fb.group({
    nome: ["", [
      // Começar com o campo vazio
      // Ter tamanho mín de 4 caracteres
      // Ser obrigatório
      Validators.minLength(4),
      Validators.required
    ]],
    assunto: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(20),
      Validators.required
    ]]
  });

  constructor(
    //Agrupar todos os campos presentes no formulário
    //E fazer algumas validações (nome com mín de caractere, por exemplo)
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  enviarFormulario() {
    alert("A mensagem foi enviada!");
    this.formContato.reset();
  }
}
