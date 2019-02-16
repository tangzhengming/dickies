$(function(){
	$('#header').load('./header.html');
	$('#footer').load('./weibu.html');
// DOM操作 失去获得焦点事件
/*var inputs=document.querySelectorAll("form>input");
for(var input of inputs){
	console.log(input);
	input.onfocus=function(){
		var inp=this;
		if(inp.className!="input_red")
		inp.className="input_black";
	}
	input.onblur=function(){
		var inp=this;
		var span=inp.nextElementSibling;
		console.log(span);
		if(inp.value==""){
			inp.className="input_red";
			 span.innerHTML="这是必填项";
			}else{
			inp.className="";
			span.innerHTML="";
		}
	 }
}*/
//juqery操作  失去获得焦点事件
$("form>input").focus(function(){
	var $inp=$(this);
	if(!$inp.hasClass("input_red"))
	$inp.addClass("input_black");
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
//button点击登录事件
$("button").click(function(){
	var $email=login($("#email"),"这是必填项");
	var $puwd=login($("#puwd"),"这是必填项");
	if($email&&$puwd){
		ajax();

	}
})

//登录事件函数
 function login(tet,html){
	 if(tet.val()==""){
		 tet.addClass("input_red").next().html(html);
		 return false;
	 }else{
		return true;
	 }
 }
  function ajax(){
	 var email=$("#email").val();
	 var upwd=$("#puwd").val();
	 $.ajax({
		url:"http://127.0.0.1:3001/login",
		type:"post",
		data:{email,upwd},
		success:function(res){
			if(res!=""){
				alert("登录成功")
				$("input").val("")
				$(".notlogin").css("display","none")
			}else{
				$(".notlogin").css("display","block")
			}
		}
	 })
	}
  })



//登录事件函数
 function login(tet,html){
	 if(tet.val()==""){
		 tet.addClass("input_red").next().html(html);
		 return false;
	 }else{
		return true;
	 }
 }
  function ajax(){
	 var email=$("#email").val();
	 var upwd=$("#puwd").val();
	 $.ajax({
		url:"http://127.0.0.1:3001/login",
		type:"post",
		data:{email,upwd},
		success:function(res){
			if(res!=""){
				alert("登录成功")
				$("input").val("")
			}else{
				$(".notlogin").css("display","block")
			}
		}
	 })
		 
	 
 }

