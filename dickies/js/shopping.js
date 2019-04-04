$(function(){
 $("#header").load("header.html")
 $("#footer").load("weibu.html ")
})
$(function(){
    $(".details").each(function(){
    var number = $(this).find(".number1").val();
    var price = $(this).find("#price").attr("data-price");
    var sum = (number*price).toFixed(2)
    $(this).find(".subtotal").html(sum);
    $(this).find(".number1").on("change",function(){
        //console.log($(this).find("#number"));
        var number =$(this).val()
        console.log(number)
        var price =$("#price").attr("data-price");
        var sum = (number*price).toFixed(2)
        $(this).parents().eq(2).find(".subtotal").html(sum)
        })
    })
    var det=$(".card-details").children(".details"); 
    var a=0;
    for(var i=0;i<det.length;i++){
        a+=parseFloat($(det[i]).find(".subtotal").html())
    }
    $(".total").html(a.toFixed(2));

})