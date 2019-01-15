$(function(){
    $('#header').load('./header.html');
    $('#foot').load('./weibu.html');
  })
 var inputs=document.querySelectorAll("form>div.biao>div.label_input>div>input")
 for(var input of inputs){
   input.onfocus=function(){
     var inp=this;
     if(inp.className!="input_red")
       inp.className="input_black";
   }
   input.onblur=function(){
     var inp=this;
     var span=inp.nextElementSibling;
    if(inp.value==""){
      inp.className="input_red";
      span.innerHTML="这是必填项";
      span.style.marginBottom="10px";
    }else{
      inp.className="";
      span.innerHTML="";
    }
   }
 }

 $("button").click(function(){
   var $btn=$(this);
   console.log($btn);
   var $inp=$(".label_input>div>input");
   console.log($inp);
   if($inp.val()==""){
     $inp.addClass("input_red")
     .next().html("这是必填项")
   }
 })