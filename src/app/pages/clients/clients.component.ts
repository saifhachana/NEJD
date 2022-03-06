import { Component} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

@Component({
  selector: 'ngx-clients',
  templateUrl: './clients.component.html',
})
export class ClientsComponent {

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
      id_client: {
        addable: false,
        editable: false,
        title: 'id client',
        type: 'string',
      },
      full_name: {
        title: 'full name',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      phone_number: {
        title: 'phone number',
        type: 'string',
      },
    },
  };

  data:Client[]=[];

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,private _adsclient:ClientService) {
    this.getallCl();
    this.source.load(this.data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this._adsclient.deleteCl(event['data']['id_ad']).subscribe(respone=>{
        event.confirm.resolve();
      });
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    this._adsclient.addCl(event['newData']).subscribe(response=>{
      event.confirm.resolve();
    });

  }
  onSaveConfirm(event) {
    this._adsclient.updateCl(event['newData']).subscribe(response=>{
      event.confirm.resolve();
    });
  }

  getallCl(){
    this._adsclient.getallC().subscribe(value=>{
      this.data=value;
      console.log(value);
    }
      
      )
  }

}

