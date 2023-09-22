import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent {
  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Birla House",
      "Type": "House",
      "Price": 1200000,
    },
    {
      "Id": 1,
      "Name": "Eros House",
      "Type": "House",
      "Price": 1900000,
    },
    {
      "Id": 1,
      "Name": "Emmar Villa",
      "Type": "Villa",
      "Price": 12123000,
    },
    {
      "Id": 1,
      "Name": "ATS House",
      "Type": "House",
      "Price": 1320000,
    },
  ];
}
