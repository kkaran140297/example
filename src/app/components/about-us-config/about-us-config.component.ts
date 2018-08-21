import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us-config',
  templateUrl: './about-us-config.component.html',
  styleUrls: ['./about-us-config.component.css']
})
export class AboutUsConfigComponent implements OnInit {

  constructor() {}

  addAboutBlog(input){
    console.log(input.value);
    }
 
  
  ngOnInit() {
  }

 

}
