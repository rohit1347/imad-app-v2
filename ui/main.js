/* console.log('Loaded!');
var element= document.getElementById('main-text');
element.innerHTML='New Value';
var img=document.getElementById('madi');
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onClick=function(){
    var interval=setInterval(moveRight,100);
  img.style.marginleft='100px'; 
};*/

//Counter Code
var button=document.getElementById('counter');
// var counter=0;
button.onclick=function(){
    
    //Make a request to the counter endpoint
var request=new XMLHttpRequest();
    //Capture the request and store it in a variable
request.onreadystatechange=function(){
    if(request.readyState===XMLHttpRequest.DONE){
        if(request.status===200){
           var names=request.responseText;
           names=JSON.parse(names);
             var list= '';
   for (var i=0; i<names.length;i++){
       list+='<li>'+names[i]+'</li>';
   }
   var ul=document.getElementById('namelist');
   ul.innerHTML=list;
        }
    }

};
request.open('GET', 'submit-name?name='+name,true);
request.send(null);
    
    
    //Render the variable in the correct span
    // counter=counter+1;
    // 
    
};

var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
   
};