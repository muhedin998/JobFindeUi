import {Component, OnInit} from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-suggested',
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.scss']
})
export class SuggestedComponent  implements OnInit {
  products: any[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Portreban Auto Mehaničar',
      description: 'Potreban auto mehaničar sa iskustvom za rad u servisu u Beogradu. Poželjno posedovanje vozačke dozvole B kategorije.',
      image: 'bamboo-watch.jpg',
      price: 1200,
      category: 'Auto Mechanic',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }
    ];
  ngOnInit(): void {
  }

  getSeverity(item: any) {
    switch (item.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return undefined;
    }
  }
}
