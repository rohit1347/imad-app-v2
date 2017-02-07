console.log('Loaded!');
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
};