"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerBIComponent = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
let pbi;
if (typeof window !== 'undefined') {
    pbi = require('powerbi-client');
}
@(0, core_1.Component)({
    selector: 'app-powerbi',
    standalone: true,
    imports: [common_1.CommonModule],
    template: `<div id="reportContainer" style="height:80vh; width:100%; border:1px solid #ccc;"></div>`
})
class PowerBIComponent {
    el;
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        console.log('✅ PowerBIComponent initialized');
        const container = this.el.nativeElement.querySelector('#reportContainer');
        if (container && pbi) {
            console.log('Power BI client ready');
            // You can add actual Power BI embedding code here if needed
        }
    }
}
exports.PowerBIComponent = PowerBIComponent;
