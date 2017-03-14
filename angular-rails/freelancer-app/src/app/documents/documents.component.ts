import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent{

  pageTitle: string = "Document Dashboard"; 
  
  documents: Document[] = [];

  constructor() { }

}
