import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Asegúrate de importar NavController

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page  {


  constructor(private navCtrl: NavController) {}

  navigateToComponent() {
    this.navCtrl.navigateForward('/page3');  // Aquí se indica la ruta correcta '/pagina2'
  }
}
 
