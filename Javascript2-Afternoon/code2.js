let students=[]
class Student{
    constructor(fname,lname,age,rollno,dob,occupation,gender){
        this.fname=fname
        this.lname=lname
        this.age=age
        this.rollno=rollno
        this.dob=dob
        this.occupation=occupation
        this.gender=gender
    }
}
document.getElementById("myForm").addEventListener('submit',(e)=>{
    e.preventDefault()
    let fname=document.forms["myForm"]["fname"].value
    let lname=document.forms["myForm"]["lname"].value
    let age=document.forms["myForm"]["age"].value
    let rollno=document.forms["myForm"]["rollno"].value
    let dob=document.forms["myForm"]["dob"].value
    let occupation=document.forms["myForm"]["occupation"].value
    let gender=document.forms["myForm"]["gender"].value
    // if(!fname.checkValidity()){
    //     alert(fname.validationMessage)
    // }
    let stud=new Student(fname,lname,age,rollno,dob,occupation,gender)
    students.push(stud)
    document.getElementById("myForm").reset()
    
})
    
    

function show(){
    let text=`<table >
        <tr>
            <th>Rollno</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Occupation</th>
        </tr>

    </table>`
    students.forEach((entry)=>{
        text+=`<tr><td>${entry.rollno}</td>
        <td>${entry.fname}</td>
        <td>${entry.lname}</td>
        <td>${entry.age}</td>
        <td>${entry.gender}</td>
        <td>${entry.dob}</td>
        <td>${entry.occupation}</td></tr>`
    })
    document.getElementById("showtable").innerHTML=text
}

function search(){
    let text=`<table >
            <tr>
                <th>Rollno</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Occupation</th>
            </tr>

        </table>`
    let f=0
    let rolno=document.getElementById("search").value
    students.forEach((entry)=>{
        if(entry.rollno==rolno){
            text+=`<tr><td>${entry.rollno}</td>
            <td>${entry.fname}</td>
            <td>${entry.lname}</td>
            <td>${entry.age}</td>
            <td>${entry.gender}</td>
            <td>${entry.dob}</td>
            <td>${entry.occupation}</td></tr>`
            
            f=1
        }
    })
    if(f==0){
        alert("Student data not found.")
        return
    }
    document.getElementById("searchtable").innerHTML=text
}