let inputslider=document.getElementById("inputslider");
let password=document.getElementById("showpass");
let length=document.getElementById("passlength");
let alllowercase=document.getElementById("lowercase");
let alluppercase=document.getElementById("uppercase");
let allnumbers=document.getElementById("numbers");
let allsymbols=document.getElementById("symbols");
let copy=document.getElementById("copy");
let btn=document.getElementById("genpass");

// code for set the length of the password according to the input
length.innerText=inputslider.value;
inputslider.addEventListener("input",()=>{
    length.innerText=inputslider.value;
})

btn.addEventListener("click",generatePassword);

function addLowercase(genpassword,lowercase){
    genpassword += lowercase.charAt(Math.floor(Math.random()*lowercase.length));  
    return genpassword;
}
function addUppercase(genpassword,uppercase){
    genpassword += uppercase.charAt(Math.floor(Math.random()*uppercase.length)); 
    return genpassword;
}
function addNumbers(genpassword,numbers){
    genpassword += numbers.charAt(Math.floor(Math.random()*numbers.length));  
    return genpassword;
}
function addSymbols(genpassword,symbols){
    genpassword += symbols.charAt(Math.floor(Math.random()*symbols.length));  
    return genpassword;
}
function generatePassword(){
    let genpassword="";
    let lowercase="abcdefghijklmnopqrstuvwxyz";
    let uppercase="QWERTYUIOPASDFGHJKLMNBVCXZ";
    let numbers="1234567890";
    let symbols="~!@#$%^&*_";
    
    let allchars="";
    let count=0;

    if(alllowercase.checked){
        allchars += lowercase;
        genpassword = addLowercase(genpassword,lowercase);
        count++;
    }
    if(alluppercase.checked){
        allchars += uppercase;
        genpassword = addUppercase(genpassword,uppercase);
        count++;

    }
    if(allnumbers.checked){
        allchars += lowercase;
        genpassword = addNumbers(genpassword,numbers);
        count++;
    }
    if(allsymbols.checked){
        allchars += symbols;
        genpassword = addSymbols(genpassword,symbols);
        count++;

    }

    let i=0;
    while(i < (inputslider.value - count)){
        genpassword += allchars.charAt(Math.floor(Math.random()*allchars.length));
        i++;
    }

    password.value = genpassword;
}

copy.addEventListener("click",()=>{
    console.log(password.value);
    window.navigator.clipboard.writeText(password.value);
    copy.innerText="check";
    copy.title="Text copied";
     setTimeout(()=>{
        copy.innerText="content_copy";
        copy.title="";
     },3000)

})