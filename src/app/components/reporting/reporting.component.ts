import { Component, OnInit } from '@angular/core';
import { RfidService } from '../../services/rfid.service';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss']
})
export class ReportingComponent implements OnInit {
  rfidData: any[] = [];

  constructor(private rfidService: RfidService) { }

  ngOnInit(): void {
    this.rfidService.getRfidEntries().subscribe(
      data => {
        this.rfidData = data;
      },
      error => {
        console.error('Error fetching RFID data:', error);
      }
    );
  }
}      