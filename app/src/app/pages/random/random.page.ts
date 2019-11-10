import { Component, OnInit } from '@angular/core';
import { RandomfunctionService } from 'src/app/services/randomfunction.service'
import { RandomApiService } from 'src/app/services/randomapi.service'

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {
  information = null;
  ran = 10;
  r = 'a';

  constructor(private Randomfunction: RandomfunctionService, private api: RandomApiService) { }

  ngOnInit() {
    this.ran = this.Randomfunction.getRandomInt(46);
    this.r = this.ran.toString(36).substring(1);
    console.log(this.ran);
    console.log(this.r);
    this.api.getDetails(this.r).subscribe(result => {
      this.information = result;
      console.log(this.information);
    });
  }

}
