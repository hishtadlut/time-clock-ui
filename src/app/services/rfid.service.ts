import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RfidService {
  private apiUrl = 'http://localhost:3000/rfid'; // Replace with your actual backend URL                   

  constructor(private http: HttpClient) { }

  // Method to send RFID data to the backend                                                               
  createRfidEntry(rfidData: { rfid_tag: string }): Observable<any> {
    return this.http.post(this.apiUrl, rfidData);
  }

  // Method to retrieve RFID data from the backend                                                         
  getRfidEntries(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Add more methods as needed for other CRUD operations                                                  
}  