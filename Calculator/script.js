function clickDisplay(val){
     document.getElementById("in").value+=val;
     
   
}
function clearDisplay(){
     document.getElementById('in').value='';
}
function equalDisplay(){
    var text =document.getElementById('in').value;
     var result=eval(text)
     document.getElementById('in').value=result;
}
