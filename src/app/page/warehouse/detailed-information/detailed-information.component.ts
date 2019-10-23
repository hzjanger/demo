import { Component, OnInit } from '@angular/core';
import {DetailedInformation} from '../../../entity/detailed-information';



@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss']
})
export class DetailedInformationComponent implements OnInit {

  displayedColumns: string[] = ['img', 'id', 'name', 'brand', 'generalCategory','medium','small','noticeNumber','tagPrice','tagAmount','retailPlus','retailAmount','operating'];
  dataSource: DetailedInformation[] = [];

  constructor() { }

  ngOnInit() {
  }

}
