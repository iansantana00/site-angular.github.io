import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;

  constructor() { }
  // retorna todos os produtos 
  getAll() {
    return this.produtos;
  }

    // retorna só o produto que tem aquele id
  getOne(produtoId: number) {
    return this.produtos.find(produto => produto.id === produtoId);
  }
}
