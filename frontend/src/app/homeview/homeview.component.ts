import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.css']
})
export class HomeviewComponent {


  header_variable=false;
  @HostListener('document:scroll')
  scrollfunction(){
	if(document.body.scrollTop>30){
		this.header_variable=true
	}
	else{
		this.header_variable=false
	}
  }
  click(){
    console.log(document.body.scrollTop.valueOf)
  }
}
