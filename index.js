console.log('postman.js');

const json = document.getElementById('JSON');
const jsonBox = document.getElementById('json-box');
const parameterBox = document.getElementById('parameter-box');
const params = document.getElementById('params');

parameterBox.style.display='none'; 

json.addEventListener('click',()=>{
    parameterBox.style.display='none';
    jsonBox.style.display='block';
})

params.addEventListener('click',()=>{
    parameterBox.style.display='block';
    jsonBox.style.display='none'; 
})

const paramCount = 0;


function getElement(str){
    let div = document.createElement('div');
    div.innerHTML=str;
    return div.firstElementChild;

}


const plusBtn = document.getElementById('plusBtn');
plusBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const parmsbox = document.getElementById('parmsbox')
   const str=`<div>
   <div >
   <input type="text" " placeholder="Enter paramet ${paramCount+2} key" class="parameterKey">
 </div>
 <div >
   <input type="text"  " placeholder="Enter parameter ${paramCount+2} value" class="parameterValue">
 </div>
 <button  class="btn delet " style="background-color:orange;" >-</button>
 </div>`;

  let paramElemnet = getElement(str);
  parmsbox.appendChild(paramElemnet)

 const deletParamsBox = document.getElementsByClassName('delet');
 for(let keys of deletParamsBox){
     keys.addEventListener('click',(e)=>{
         e.target.parentElement.remove();
     })
 }
})


let sendBtn = document.getElementById('submit');
sendBtn.addEventListener('click',(e)=>{

    e.preventDefault();
    
    let responseText = document.getElementById('responsePrism');
   responseText.innerHTML="please wait you request is sending.....";

const url = document.getElementById('URL').value;

let requestType = document.querySelector("input[name='requestType']:checked").value;
let contentType = document.querySelector("input[name='contentType']:checked").value;


if(contentType=='params'){
    let data={};
    for(let i =0; i<paramCount+1;i++){

    }
}
else{
  data = document.getElementById('jsontext').value;
}

console.log(url);
console.log(requestType);
console.log(contentType);

if(requestType=='GET'){
    fetch(url,{
        method:'GET'
    })
    .then((res)=>{
        return res.text();
    })
    .then((data)=>{
        let responseText = document.getElementById('responsePrism');
        responseText.innerHTML=data;
    })
}
else if(requestType=='POST'){
    fetch(url,{
        method:'POST',
        body:data,
        headers:{
            "Content-type":"application/json"
        }
    })
    .then((res)=>{
        return res.text();
    })
    .then((data)=>{
        let responseText = document.getElementById('responsePrism');
        responseText.innerHTML=data;
    })
}
else if(requestType=='PUT'){
    fetch(url,{
        method:'PUT',
        body:data,
        headers:{
            "Content-type":"application/json"
        }
    })
    .then((res)=>{
        return res.text();
    })
    .then((data)=>{
        let responseText = document.getElementById('responsePrism');
        responseText.innerHTML=data;
    })
}
else{
    fetch(url,{
        method:'DELETE',
        headers:{
            "Content-type":"appliction/json"
        }
    })
}
   

})
