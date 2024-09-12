import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Asegúrate de importar NavController

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  navigateToComponent() {
    this.navCtrl.navigateForward('/page2');  // Aquí se indica la ruta correcta '/pagina2'
  }
}
