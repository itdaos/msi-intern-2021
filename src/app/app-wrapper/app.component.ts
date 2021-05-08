import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MSI2021';
  activatedButton: string = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(
      (params) => {
        console.log(params);
      }
    )
  }
}
