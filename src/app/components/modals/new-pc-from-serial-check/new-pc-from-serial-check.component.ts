import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PCModelStock } from '../../../models/pcmodel-stock';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PCModelStockService } from '../../../services/pcmodel-stock.service';

@Component({
  selector: 'app-new-pc-from-serial-check',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-pc-from-serial-check.component.html',
  styleUrl: './new-pc-from-serial-check.component.scss'
})
export class NewPcFromSerialCheckComponent implements OnInit {
  stocks: PCModelStock[] = [];
  selectedStock: PCModelStock = {} as PCModelStock;

  constructor(public activeModal: NgbActiveModal, private pcModalStockService: PCModelStockService) {}

  ngOnInit(): void {
    this.pcModalStockService.getPCModelStocks().subscribe((stocks) => {
      this.stocks = stocks;
      this.selectedStock = stocks[0];
    });
  }
}
