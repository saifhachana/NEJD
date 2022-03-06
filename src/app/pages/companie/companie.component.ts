import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { Companie } from '../../Models/Companie';
import { CompanieService } from '../../services/companie.service';

@Component({
  selector: 'ngx-companie',
  templateUrl: './companie.component.html'
})
export class CompanieComponent  {

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
      id_companie: {
        addable: false,
        editable: false,
        title: 'id companie',
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

  data:Companie[]=[];

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,private _compservice:CompanieService) {
    this.getallCl();
    this.source.load(this.data);
  }

  getallCl(){
    this._compservice.getallComp().subscribe(value=>{
      this.data=value;
      console.log(value);
    }
      
      )
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this._compservice.deletecomp(event['data']['id_ad']).subscribe(respone=>{
        event.confirm.resolve();
      });
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    this._compservice.addcomp(event['newData']).subscribe(response=>{
      event.confirm.resolve();
    });

  }
  onSaveConfirm(event) {
    this._compservice.updatecomp(event['newData']).subscribe(response=>{
      event.confirm.resolve();
    });
  }

}
