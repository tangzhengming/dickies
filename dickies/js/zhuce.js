 //引入头部
 $(function(){
     $('#header').load('./header.html');
     $('#foot').load('./weibu.html');
   })
   //DOM操作 获得焦点失去焦点事件
 /*var inputs=document.querySelectorAll("form>div.biao>div.label_input>div>input")
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
 }*/
 //获得焦点失去焦点事件juqery
 $(":text").focus(function(){
   var $inp=$(this);
   if(!$inp.hasClass("input_red"))
      $inp.addClass("input_black")
 })
 .blur(function(){
   var $inp=$(this);
   if($inp.val()==""){
      $inp.addClass("input_red")
      .next().html("这是必填项");
   }else{
      $inp.removeClass()
      .next().html("");
   }
 })


 $("button").click(function(e){
  e.preventDefault();
   var $inp=$(":text");
   if($inp.val()==""){
     $inp.addClass("input_red")
     .next().html("这是必填项")
   }else{
     $inp.removeClass()
     .next().html("");
   }
   
 })