import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent {
  addstock: FormGroup;
  constructor(private fb:FormBuilder ) {
    this.addstock=this.fb.group({
      name:['',Validators.required],
      price:['',Validators.required],
      quantity:['',Validators.required]
    })
  }
 add(){
  console.log(this.addstock.value)
 }
 reset(){
  this.addstock.reset()
 }
}
