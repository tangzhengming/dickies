var inputs=document.querySelectorAll("form>input");
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
}