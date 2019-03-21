 //引入头部
/*class Zhuce {
    constructor(name,email,pwd,phone,tpwd){
        this.name = name;
        this.email = email;
        this.pwd = pwd;
        this.phone = phone;
        this.tpwd = tpwd;
        this.state = "";

        this.zname();
        
    }
}*/
 $(function(){
     $('#header').load('./header.html');
     $('#footer').load('./weibu.html');
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
 $(".input_gray>input").focus(function(){
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

//点击button按钮
/*$("button").click(function(e){
    e.preventDefault();
    $.each($(".label_input>div>input"),function(i,elem){
        if($(elem).val()==""){
            $(elem).addClass("input_red");
        }else{
            $(elem).addClass("input_black");
        }
    })
})*/
//button按钮加载input框
$("button").click(function(e){
    e.preventDefault();
    var $chebox=$(".read>input:checkbox").prop("checked");
    if(!$chebox){
        $(".read>span").html("这是必填项");
    }else{$(".read>span").html("");}
    $(".input_gray>input").each(function(){
      if($(this).val()==""){
          $(this).addClass("input_red").next().html("这是必填项");
      }
              //$(this).removeClass().next().html("");
              //$(".read>span").html("");
        })
     if(!$chebox){
        $(".read>span").html("这是必填项");
    }else{
        $(".read>span").html("");
     var email=vail($("#email"),/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'电子邮件地址无效');
     var semail=vail($("#semail"),/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'电子邮件地址无效');
     var puwd=vail($("#puwd"),/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{8,255}$/,"8~255位字符");
     var spuwd=vail($("#spuwd"),/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{8,255}$/,"8~255位字符");
     var phone=vail($("#phone"),/^1(3|4|5|7|8)\d{9}$/,"请输入有效的手机号码");
    if($("#email").val()==$("#semail").val()&&$("#puwd").val()==$("#spuwd").val()&&phone&&semail&&spuwd){
        //e.stopPropagation()
        ajax();
    }else{
        //e.stopPropagation()
        alert("信息填写有误,请核实注册信息");
     }
   }
})

function vail(txt,reg,html){
  if(!reg.test(txt.val())){
     txt.prev().css("color","#c41230")
     .next().addClass("input_red")
     .next().html(html)  
     return false;
  }else{
    txt.prev().css("color","#444")
    .next().removeClass()
    .next().html("");
    return true;
  }
}
   function ajax(){
     var uname=$("#uname").val()
     var email=$("#semail").val()
     var puwd=$("#spuwd").val()
     var phone=$("#phone").val()
     var sex=$("#sex>label>input:checked").val()
    $.ajax({
        url:"http://127.0.0.1:3001/zhuce",
        type:"post",
        data:{uname,email,puwd,phone,sex},
        success: function(res) {
            alert(res);
            $("input").val("");
            $(".read>input:checkbox").attr("checked",false)
        }
    })

 }
})
/*$("button").on("click",function(){
   
    
})
*/