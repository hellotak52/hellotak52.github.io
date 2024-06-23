$(function(){
    var a = 0
    var b = 0

    $("#btn").click(function(){
        a++
        b=a%2
        if(b==1){
            $("#btn").css("right","400px")
            $("#menu").css("right","0px")
        }else{
            $("#btn").css("right","0px")
            $("#menu").css("right","-400px")
        }
    })
    $("li img").click(function(){
        $(this).next().slideToggle(500)
        /* 내가 클릭한 img태그 바로 다음 작성되어있는 p태그(다음태그)한테 slideToggle을 적용시켜서 이미지를 클릭할 때 마다 p태그가 내려오고 올라가도록 만들어주는 역할 */
        $("li img").not(this).next().slideUp(500)
        /* 내가 클릭한 img태그를 제외한 다른 모든 img태그들의 바로다음 작성되어 있는 p태그한테 slideUp을 적용시켜랴 */
    })
})