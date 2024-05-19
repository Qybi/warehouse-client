import { Component } from '@angular/core';
import { PCModelStock } from '../../../models/pcmodel-stock';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-create-stock',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modal-create-stock.component.html',
  styleUrl: './modal-create-stock.component.scss'
})
export class ModalCreateStockComponent {
  stock: PCModelStock = {} as PCModelStock;

  constructor() {}

  initModal(stock: PCModelStock) {
    this.stock = stock;
  }
}
