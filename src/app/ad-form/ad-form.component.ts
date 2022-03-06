import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Ad } from '../models/Ad';
import { Client } from '../Models/Client';
import { AdService } from '../services/ad.service';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'ngx-ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.css']
})
export class AdFormComponent implements OnInit {
  file: any;
  private basePath = '/images';
  url: any;
  ready: string;
  image: any;
clients: Client[];

ad :Ad;

  constructor(private afStorage: AngularFireStorage,private _adsclient: ClientService,private _adservice:AdService) {
    this.ad = new Ad(null,"",null,"");
   }

  ngOnInit(): void {
    this.getallCl();
  }

  AdUp = new FormGroup({
         title: new FormControl('')

  });
  handleFiles(event) {
    this.file = event.target.files[0];
  }
  
  async uploadFile() {
    if (this.file) {
      const filePath =`${this.basePath}/${this.file.name}`; 
      const snap = await this.afStorage.upload(filePath, this.file);    
      await this.getUrl(snap);
    }
      
    }
    getallCl() {
      this._adsclient.getallC().subscribe(value => {
        this.clients = value;
      })
    }

  private async getUrl(snap: firebase.storage.UploadTaskSnapshot) {
    const url = await snap.ref.getDownloadURL();
    this.url = url; 
    this.image=this.url;
   this.ad.link=this.url;
    
  }

  async onSubmit(){
  await this.uploadFile();
  this._adservice.addad(this.ad).subscribe();


    
  }
}
