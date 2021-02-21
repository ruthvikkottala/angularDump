let getResult=()=>{
    let str=document.getElementById("str").value
    let pattern=/\d/g
    if(pattern.test(str)){
        
        alert("Number present in the string")
        return
        
    }
    let vowels="",consonants=""

    for(i of str){
        let v=i.toLowerCase()
        if(i==='a' || i==='e'|| i==='i' || i==='o' || i==='u') vowels+=i+' '
        else consonants+=i+' '
    }
    document.getElementById("length").innerHTML+=str.length
    document.getElementById("upper").innerHTML+=str.toUpperCase()
    document.getElementById("lower").innerHTML+=str.toLowerCase()
    document.getElementById("vowels").innerHTML+=vowels
    document.getElementById("consonants").innerHTML+=consonants
    
    
}