$(function(){
    $.ajax({
    url:"http://127.0.0.1:3001/shouye",
    type:"get",
    data:{},
    dataType:"json",
    success: function(res) {
        var obj=res[0]
        console.log(obj)
        var html="";
        html+=`<div class='ziti'>
		<p>${obj.titleYear}</p>
		<h3>${obj.title}</h3>
		<button><a href="">即刻选购</a></button>
        </div>`;
        $(".hbody").html(html);
        $(".hbody").css("background-image",`url(${obj.img_url})`)
    }
  })
})