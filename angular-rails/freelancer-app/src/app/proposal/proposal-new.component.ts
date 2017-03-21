import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'app-proposal-new',
  templateUrl: './proposal-new.component.html',
  styleUrls: ['./proposal-new.component.css']
})
export class ProposalNewComponent implements OnInit {

  proposal = new Proposal;
  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
