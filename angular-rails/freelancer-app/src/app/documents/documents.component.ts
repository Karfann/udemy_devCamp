import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent{
  
  documents: Document[] = [
    {
      title: 'My First Doc', 
      description: 'description lorem ipsum', 
      file_url: 'http://google.com', 
      image_url: 'http://google.com/img', 
      update_at:'2016-01-01'
    },
    {
      title: 'My Second Doc', 
      description: 'description second lorem ipsum', 
      file_url: 'http://google.com', 
      image_url: 'http://google.com/img', 
      update_at:'2016-01-01'
    },
    {
      title: 'My Last Doc', 
      description: 'description last lorem ipsum', 
      file_url: 'http://google.com', 
      image_url: 'http://google.com/img', 
      update_at:'2016-01-01'
    }
  ];

  constructor() { }

}
