import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }
    
  // Pegar as informações referentes ao Carrinho
  // Caso ele não consiga, pegar uma string vazia

  obtemCarrinho() {
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
        // Acrescentar produto no carrinho
    this.itens.push(produto);
        // Salvar no localStorage a lista de produtos
    // JSON converte para string
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  removerProdutoCarrinho(produtoId: number) {
       // Filtrar o item específico que tenha o id diferente do 
    // id que será recebido para remoção do produto
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }
}
