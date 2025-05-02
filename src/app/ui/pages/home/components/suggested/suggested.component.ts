import {Component, Input, OnInit} from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import {JobModel} from "../../../../../models/job.model";
@Component({
  selector: 'app-suggested',
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.scss']
})
export class SuggestedComponent  implements OnInit {
  @Input() products?: JobModel[] | null;
  ngOnInit(): void {
  }

  getSeverity(item: any) {
    switch (item.inventoryStatus) {
      case 'AKTIVAN':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'NEAKTIVAN':
        return 'danger';

      default:
        return undefined;
    }
  }
}
