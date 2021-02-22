import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { DateFormat } from './dateFormat.pipe';
import { FormService } from './form.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dataapp';
  employees=[]
  constructor(private formService:FormService){

  }
  ngOnInit(){
    
    sessionStorage.setItem('employees',JSON.stringify(this.employees))
    
  }
  addForm = new FormGroup({
    fname:new FormControl(''),
    lname:new FormControl(''),
    phone:new FormControl(''),
    dob:new FormControl(''),
    city:new FormControl(''),
    pincode:new FormControl('')
  })
  collectData(){
    this.formService.collectData(this.addForm.value)
    this.addForm.reset()
  }
  showData(){
    let employees=JSON.parse(sessionStorage.getItem('employees'))
    if(employees.length==0){
      document.getElementById("showtable").innerHTML=""
      return
    }
    let text=`<tr>
    <th><button id="fname" class="sortBtn btn btn-secondary">FirstName</button></th>
    <th><button id="lname" class="sortBtn btn btn-secondary">LastName</button></th>
    <th><button id="phone" class="sortBtn btn btn-secondary">Phone</button></th>
    <th><button id="dob" class="sortBtn btn btn-secondary">Date of birth</button></th>
    <th><button id="city" class="sortBtn btn btn-secondary">City</button></th>
    <th><button id="pincode" class="sortBtn btn btn-secondary">Pincode</button></th>
    </tr>`
    employees.forEach((ele,idx)=>{
      text+=`<tr>
      <td>${ele.fname}</td>
      <td>${ele.lname}</td>
      <td>${ele.phone}</td>
      <td>`+ new DateFormat().transform(ele.dob) +`</td>
      <td>${ele.city}</td>
      <td>${ele.pincode}</td>
      <td><button class="deleteBtn btn btn-danger" id="${idx}">Delete</button></td>
      </tr>`
    })
    document.getElementById("showtable").innerHTML=text
    document.querySelectorAll(".deleteBtn").forEach((btn)=>{
      btn.addEventListener('click',()=>this.deleteItem(btn["id"]))
    })
    document.querySelectorAll(".sortBtn").forEach((btn)=>{
      btn.addEventListener('click',()=>this.sortData(btn["id"]))
    })
  }      
  deleteItem(index){
    this.formService.deleteItem(index)
    this.showData()
    
  }
  sortData(criteria){
    this.formService.sortData(criteria)
    this.showData()
  }
}

