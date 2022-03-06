import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { Ad } from '../../models/Ad';
import { AdService } from '../../services/ad.service';

@Component({
  selector: 'ngx-ad',
  templateUrl: './ad.component.html',
})
export class AdComponent {

  settings = {
    add: {
      confirmCreate: true,

      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      confirmSave: true,

      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id_ad: {
        addable: false,
        editable: false,
        title: 'ID',
        type: 'string',
      },
      title: {
        title: 'title',
        type: 'string',
      },
      id_client: {
        editable: false,
        title: 'id client',
        type: 'string',
      },
      link: {
        title: 'link',
        type: 'string',
      },
    },
  };
  data:Ad[]=[];

  source: LocalDataSource = new LocalDataSource();

  
  constructor(private service: SmartTableData,private _adservice:AdService) {
    this.getallad();
    this.source.load(this.data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this._adservice.deletead(event['data']['id_ad']).subscribe(respone=>{
        event.confirm.resolve();
      });
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    this._adservice.addad(event['newData']).subscribe(response=>{
      event.confirm.resolve();
    });

  }
  onSaveConfirm(event) {
    this._adservice.updatead(event['newData']).subscribe(response=>{
      event.confirm.resolve();
    });
  }

  getallad(){
    this._adservice.getallad().subscribe(value=>{
      this.data=value;
      console.log(value);
    }
      
      )
  }

  

}
