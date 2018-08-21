import { Component, OnInit } from '@angular/core';

export interface EmployeeDetails {
  firstname: string;
  secondname?:string;
  employeeid: number;
  email:string;
  mobilenumber: number;
  dob: string;
  address:string;
}

const ELEMENT_DATA: EmployeeDetails[] = [
  {firstname:'Raja', secondname:'Ganapathi', employeeid:1 , email:'raja@gmail.com', mobilenumber:8882828281 , dob:'10/10/89' , address:'sqwsdadqdd'},
  {firstname:'Allen', secondname:'Paul', employeeid:2 , email:'allenpaul@gmail.com', mobilenumber:8882828281 , dob:'10/10/89' , address:'sqwsdadqdd'},
  {firstname:'Amit', secondname:'', employeeid:3 , email:'amit@gmail.com', mobilenumber:8882828281 , dob:'10/10/89' , address:'sqwsdadqdd'},
  {firstname:'Jonas', secondname:'Akula', employeeid:4 , email:'jonasakula@gmail.com', mobilenumber:8882828281 , dob:'10/10/89' , address:'sqwsdadqdd'},
  {firstname:'Aruna', secondname:'Kumar', employeeid:5 , email:'aruna.kumar@gmail.com', mobilenumber:8882828281 , dob:'10/10/89' , address:'sqwsdadqdd'},
  {firstname:'Selva', secondname:'Ganapathi', employeeid:6 , email:'selva.kuttipuli@gmail.com', mobilenumber:8882828281 , dob:'10/10/89' , address:'sqwsdadqdd'},
  {firstname:'Diana', secondname:'Andrews', employeeid:7 , email:'diana@gmail.com', mobilenumber:8882828281 , dob:'10/10/89' , address:'sqwsdadqdd'},
  {firstname:'Vinoliya', secondname:'', employeeid:8 , email:'vinoliya@gmail.com', mobilenumber:8882828281 , dob:'10/10/89' , address:'sqwsdadqdd'},
  {firstname:'Rebbuca', secondname:'Jain', employeeid:9 , email:'rebucca@gmail.com', mobilenumber:8882828281 , dob:'10/10/89' , address:'sqwsdadqdd'},
  {firstname:'Vedanth', secondname:'', employeeid:10 , email:'vedanth@gmail.com', mobilenumber:8882828281 , dob:'10/10/89' , address:'sqwsdadqdd'},
  {firstname:'Sashi', secondname:'', employeeid:11 , email:'sashi@gmail.com', mobilenumber:8882828281 , dob:'10/10/89' , address:'sqwsdadqdd'},
  {firstname:'Adithya', secondname:'Mohith', employeeid:12 , email:'adithya.mohith@gmail.com', mobilenumber:8882828281 , dob:'10/10/89' , address:'sqwsdadqdd'},
  {firstname:'Karan', secondname:'K', employeeid:13 , email:'kkaran140297@gmail.com', mobilenumber:8884659867 , dob:'10/10/89' , address:'sqwsdadqdd'}
];

@Component({
  selector: 'app-emp-details-table',
  templateUrl: './emp-details-table.component.html',
  styleUrls: ['./emp-details-table.component.css']
})
export class EmpDetailsTableComponent implements OnInit {

  displayedColumns: string[] = ['firstname','secondname','employeeid','email','mobilenumber','dob','address'];
  dataSource = ELEMENT_DATA

  constructor() { }

  ngOnInit() {
  }

}
