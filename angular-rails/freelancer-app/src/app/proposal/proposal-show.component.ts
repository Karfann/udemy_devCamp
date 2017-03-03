import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'app-proposal-show',
  templateUrl: './proposal-show.component.html'
})
export class ProposalShowComponent implements OnInit {
  
  id: number;
  routeId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    )
  }

}
