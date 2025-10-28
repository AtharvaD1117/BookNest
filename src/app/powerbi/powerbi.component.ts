// src/app/powerbi/powerbi.component.ts
import { Component, ElementRef, OnInit } from '@angular/core';

let pbi: any;
if (typeof window !== 'undefined') {
  pbi = require('powerbi-client');
}
