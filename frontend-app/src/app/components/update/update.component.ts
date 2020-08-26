import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  i: number;
  items: any = [];
  model: any = {
    titre: '' ,
    Description: ''
  };
  tab = [];

  updateButtonActive = false;
  constructor(
    private Service: ServiceService
  ) { }

  ngOnInit() {
    this.items = this.Service.getItems();
  }
  onSubmit() {
    this.Service.addItem(this.model);
    this.model = {
      titre: '' ,
      Description: ''
    };
  }

removeForm(i) {
  this.Service.remove(i);
}
updateHandler(item: object) {
  this.model = item;
  this.updateButtonActive = true;
}
updatePosition(position: number) {
this.i = position;
}
update() {
  this.Service.update(this.i, this.model);
  console.log(this.i);
}
}
