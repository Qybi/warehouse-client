import { Component } from '@angular/core';
import { PCModelStock } from '../../models/pcmodel-stock';
import { PCService } from '../../services/pc.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCreateStockComponent } from './modal-create-stock/modal-create-stock.component';
import { PCModelStockService } from '../../services/pcmodel-stock.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import _ from 'lodash';
import { WorkInProgressComponent } from '../dev/work-in-progress/work-in-progress.component';

@Component({
  selector: 'app-stocks-manager',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './stocks-manager.component.html',
  styleUrl: './stocks-manager.component.scss'
})
export class StocksManagerComponent {
  displayStocks: PCModelStock[] = [];
  stocks: PCModelStock[] = [];

  search: string = '';

  constructor(
    private stockService: PCModelStockService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.stockService.getPCModelStocks().subscribe(stocks => {
      this.stocks = stocks;
      this.displayStocks = _.orderBy(this.stocks.map(x => x), { purchaseDate: 'desc' });
    });
  }

  searchPc() {
    this.displayStocks = this.stocks.filter((stock) => {
      return (
        stock.brand.toLowerCase().includes(this.search.toLowerCase()) ||
        stock.model.toLowerCase().includes(this.search.toLowerCase()) ||
        stock.ram.toLowerCase().includes(this.search.toLowerCase())
      );
    });
  }

  openEdit(stock: PCModelStock) {
    const m = this.modalService.open(ModalCreateStockComponent, {
      size: 'lg',
      backdrop: 'static',
      animation: true,
      keyboard: true
    });
    (m.componentInstance as ModalCreateStockComponent).initModal(stock); 
  }

  openAdd() {
    const m = this.modalService.open(WorkInProgressComponent, {
      size: 'lg',
      backdrop: 'static',
      animation: true,
      keyboard: true
    });
  }
}
