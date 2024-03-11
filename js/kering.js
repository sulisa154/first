$(function(){

    $(".sub_btn").click(function(){
        //alert()
        $("#submenu").css("display","block")
        //$(".sub_btn").css("display","none")
    })

    $(".sub_close").click(function(){
        //alert("아 좀 닫혀라")
        $("#submenu").css("display","none")
        $(".sub_btn").css("display","block")
        //$("#submenu").css("opacity","0")
    })
})