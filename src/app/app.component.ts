import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private swUpdate: SwUpdate){

  }

  ngOnInit(){

    if (this.swUpdate.isEnabled) {
                console.log('am in update');
                  this.swUpdate.available.subscribe(() => {
      
                      if(confirm("New version available. Load New Version?")) {
      
                          window.location.reload();
                      }
                  });
              }
  }
}
