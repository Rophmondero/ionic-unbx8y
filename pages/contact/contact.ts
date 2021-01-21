import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: ["contact.css"]
})
export class ContactPage {
  feet: number;
  inches: number;
  gender: string;
  idealWeight: number;
  robinson: number;
  miller: number;
  hamwi: number;
  devine: number;
  constructor(public navCtrl: NavController) {

  }
calculateidealWeight(){

    if (this.gender === "m" && this.feet >= 5 && 0 < this.inches <= 11) {
      this.robinson = 52  + 1.9 * ((this.feet - 5) + this.inches);
        this.robinson = parseFloat (this.robinson.toFixed(2)) +"kg";

      this.miller = 56.2+ 1.41 * ((this.feet - 5) + this.inches)  ;
        this.miller = parseFloat (this.miller.toFixed(2)) +"kg";
      
      this.hamwi = 48.0 + 2.7  * ((this.feet - 5) + this.inches);
        this.hamwi = parseFloat (this.hamwi.toFixed(2)) +"kg";

      this.devine = 50.0  + 2.3   * ((this.feet - 5) + this.inches);
        this.devine = parseFloat (this.devine.toFixed(2)) +"kg";

    }else if (this.gender === "f"&& this.feet >= 5 &&  0 < this.inches <= 11) {
      this.robinson = 49 + 1.7  * ((this.feet - 5) + this.inches);
        this.robinson = parseFloat (this.robinson.toFixed(2)) +"kg";

      this.miller = 53.1  + 1.36  * ((this.feet - 5) + this.inches);
        this.miller = parseFloat (this.miller.toFixed(2)) +"kg";
      
      this.hamwi = 45.5  + 2.2  * ((this.feet - 5) + this.inches);
        this.hamwi = parseFloat (this.hamwi.toFixed(2)) +"kg";

      this.devine = 45.5  + 2.3   * ((this.feet - 5) + this.inches);
        this.devine = parseFloat (this.devine.toFixed(2)) +"kg";

    }else {
     this.robinson ="n/a" ;
     this.miller ="n/a" ;
     this.hamwi ="n/a" ;
     this.devine ="n/a" ;
}
  }
}