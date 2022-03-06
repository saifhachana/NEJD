import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDateService } from '@nebular/theme';
import { Ad } from '../../models/Ad';
import { Client } from '../../Models/Client';
import { Companie } from '../../Models/Companie';
import { Contract } from '../../Models/Contract';
import { AdService } from '../../services/ad.service';
import { ClientService } from '../../services/client.service';
import { CompanieService } from '../../services/companie.service';
import { ContractService } from '../../services/contract.service';

const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'ngx-add-contract',
  templateUrl: './add-contract.component.html'
})
export class AddContractComponent implements OnInit {
  selectedItem = '2';
  clients;
  companies;
  ads;
  options = [
    { value: 1, label: '1 day/week' },
    { value: 2, label: '2 day/week' },
    { value: 3, label: '3 day/week' },
    { value: 4, label: '4 day/week' },
    { value: 5, label: '5 day/week' },
    { value: 6, label: '6 day/week' },
    { value: 7, label: '7 day/week' },
  ];
  min: Date;
  max: Date;
  formControl: Date;
  contract;
  constructor(private router: Router,protected dateService: NbDateService<Date>,private _contservice:ContractService, private _adsclient: ClientService, private _compservice: CompanieService, private _adservice: AdService) {
    this.getallCl();
    this.getallCompanie();
    this.getallad();
    this.min = (this.dateService.addDay(this.dateService.today(), 7));
    this.formControl = this.min;
    this.contract=new Contract("",new Client(null,null,null,null),new Companie(null,null,null,null),new Ad(null,null,null,null),0,0,null,null);
  }

  ngOnInit(): void {
  }
  getallCl() {
    this._adsclient.getallC().subscribe(value => {
      this.clients = value;
    })
  }

  getallCompanie() {
    this._compservice.getallComp().subscribe(value => {
      this.companies = value;
    })
  }

  getallad() {
    this._adservice.getallad().subscribe(value => {
      this.ads = value;
    })
  }
  onSubmit() {

    let dates = this.contract.start_date.getDate()+"/"+(this.contract.start_date.getMonth()+1)+"/"+this.contract.start_date.getFullYear();
    let datee = this.contract.end_date.getDate()+"/"+(this.contract.end_date.getMonth()+1)+"/"+this.contract.end_date.getFullYear();

    var docDefinition = { pageSize: 'A4',
    header: {text: 'Contrat ', fontSize:30 ,alignment: 'center',bold:true},
    content: [
	    
	    {text: "Le présent contrat est établi entre le client "+this.contract.id_client+" et l'entreprise "+this.contract.id_companie+" pour afficher la publicite "+this.contract.id_ad+" du "+dates+" au "+datee+" elle vas etre afficher "+this.contract.loop+" fois par jour et "+this.contract.days+" jour par semaine", fontSize: 14,alignment: 'center',
	    margin: [0, 50, 0, 0]},
	    
	    {text: "signature client", listType: 'none',bold: true,italics: true,margin: [0, 40, 0, 0]},
	    {text: "signature entreprise", listType: 'none',bold: true,italics: true,margin: [0, -12, 0, 0], alignment:'right'},
		
	
	]
  
  };
  pdfMake.createPdf(docDefinition).open();
    
     this._contservice.addcont(this.contract).subscribe(response=>{
        this.router.navigate(['pages/contracts']);
      });
    
  }

}
