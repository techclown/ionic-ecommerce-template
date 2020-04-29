import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';  

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {

  constructor(public alertCtrl: AlertController) { }
  async showAlert() {  
    const alert = await this.alertCtrl.create({  
     
      
      message: 'You will recieve an Email, open it and follow the instructions to reset your password. ',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }  

  ngOnInit() {
  }

}
