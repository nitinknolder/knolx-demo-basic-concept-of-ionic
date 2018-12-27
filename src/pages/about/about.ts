import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'lazyabout'
})
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  ionViewWillEnter() {
    console.log('view will enter in about page');
  }
  ionViewWillLeave() {
    console.log('IonViewWillLeave is fired each time the page is about to leave the about page');
  }
  ionViewDidLeave() {
    console.log('IonViewDidLeave is fired when the user has left the page');
  }
  ionViewWillUnload() {
    console.log('IonViewDidLeave is fired when the user unload the page');
  }
  navigateToContactPage() {
    this.navCtrl.push('contact-page');
  }

  navigateToHomePage(){
    this.navCtrl.pop();
  }

}
