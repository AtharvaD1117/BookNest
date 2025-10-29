import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

let pbi: any;
if (typeof window !== 'undefined') {
  pbi = require('powerbi-client');
}

@Component({
  selector: 'app-powerbi',
  standalone: true,
  imports: [CommonModule],
  template: `<div id="reportContainer" style="height:80vh; width:100%; border:1px solid #ccc;"></div>`
})
export class PowerBIComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    console.log('✅ PowerBIComponent initialized');
    const container = this.el.nativeElement.querySelector('#reportContainer');
    if (container && pbi) {
      console.log('Power BI client ready');
      // You can add actual Power BI embedding code here if needed
    }
  }
}
