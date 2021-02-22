import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }
  collectData(data){
    console.log(data)
    let employees=JSON.parse(sessionStorage.getItem('employees'))
    employees.push(data)
    console.log(employees)
    sessionStorage.setItem('employees',JSON.stringify(employees))
  }
  deleteItem(index){
    let employees=JSON.parse(sessionStorage.getItem('employees'))
    console.log(employees)
     employees.splice(parseInt(index),1)
    sessionStorage.setItem('employees',JSON.stringify(employees))
  }
  sortData(criteria){
    let employees=JSON.parse(sessionStorage.getItem('employees'))
    // console.log(employees[0].criteria)
    employees.sort((a,b)=>{
      if(a[criteria].toLowerCase()<b[criteria].toLowerCase())return -1
      if(a[criteria].toLowerCase()>b[criteria].toLowerCase()) return 1
      return 0
    })
    
    sessionStorage.setItem('employees',JSON.stringify(employees))
  }
}
