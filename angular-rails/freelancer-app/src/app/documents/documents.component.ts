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
  
  documents: Document[] = [
    {
      title: 'My First Doc', 
      description: 'description lorem ipsum', 
      file_url: 'http://google.com', 
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg/1024px-Mistakes-to-avoid-when-hiring-freelancers.jpg', 
      update_at:'2016-01-01'
    },
    {
      title: 'My Second Doc', 
      description: 'description second lorem ipsum', 
      file_url: 'http://google.com', 
      image_url: 'http://maxpixel.freegreatpicture.com/static/photo/1x/Business-Office-Workstation-Macbook-Air-Notebook-336369.jpg', 
      update_at:'2016-01-01'
    },
    {
      title: 'My Last Doc', 
      description: 'description last lorem ipsum', 
      file_url: 'http://google.com', 
      image_url: 'http://maxpixel.freegreatpicture.com/static/photo/1x/Freelancer-Business-Computer-Office-Laptop-Work-625892.jpg',
      update_at:'2016-01-01'
    }
  ];

  constructor() { }

}
