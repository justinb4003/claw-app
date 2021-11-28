import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'claw-app';

  constructor(private http: HttpClient) { }

  public clawChange(event: any): void {
    console.log('change', event.value);
    const pct = Math.floor(event.value);
    this.http.get<any>('http://192.168.1.41:80/claw/' + pct).subscribe(data => {
      console.log(data);
    });
  }
}
