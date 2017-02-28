import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html'
})
export class ProposalListComponent implements OnInit {

  proposalOne: Proposal = new Proposal(
    1, 'Abc Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com'
  )
  proposalTwo: Proposal = new Proposal(
    2, 'Xz Company', 'http://google.com', 'Angular 2', 120, 100, 12, 'jordan@devcamp.com'
  )
  proposalThree: Proposal = new Proposal(
    3, 'Other Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com'
  )

  proposals:  Proposal [] = [this.proposalOne, this.proposalTwo, this.proposalThree];

  constructor() { }
  
  ngOnInit() {
  }

}
