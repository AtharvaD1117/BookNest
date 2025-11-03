import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// ✅ Import via ESM path (Angular-friendly)
import * as pbi from 'powerbi-client';

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

    const models = pbi.models;
    const container = this.el.nativeElement.querySelector('#reportContainer');

    if (!container) {
      console.error('❌ Report container not found!');
      return;
    }

    // ✅ Dummy embed configuration (test mode)
    const embedConfig: pbi.IEmbedConfiguration = {
      type: 'report',
      id: '00000000-0000-0000-0000-000000000000', // fake GUID
      embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=dummy',
      accessToken: 'test',
      tokenType: models.TokenType.Embed,
      settings: {
        background: models.BackgroundType.Transparent
      }
    };

    const powerbi = new pbi.service.Service(
      pbi.factories.hpmFactory,
      pbi.factories.wpmpFactory,
      pbi.factories.routerFactory
    );

    try {
      powerbi.embed(container, embedConfig);
      console.log('✅ PowerBI embed called (test mode)');
    } catch (err) {
      console.error('❌ Error embedding Power BI:', err);
    }
  }
}
