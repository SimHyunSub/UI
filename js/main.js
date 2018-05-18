$("#login").on("click", function(){
    $("#layer").css("display", "block");
    $("#container").css("opacity", "0.5");
    $("#login-box").css("display", "block");
});

$("#layer").on("click", function(){
    layerOut();
});
/*글쓰기 버튼 클릭*/
$("#writebtn").on("click", function(){
    var html = '<div class="write-body">';
    
    $("#right-2").empty().append(html);
    $("#right-3").empty();
    $("#right-4").empty();
    $(".write-body").load("write.html");
});

$("#loginBtn").on("click", function(){
     layerOut();
    console.log("1");
     $("#writebtn").css("display", "block");
    return false;
});

/* 회원가입 ajax */
$("#joinBtn").on("click", function(){
    layerOut();
    var html = '<div class="join-form">';
    
            $("#right-2").hide();
            $("#right-3").hide();
            $("#right-4").hide();
            
            $("#temp_div").append(html);
            $(".join-form").load("join.html");
            $("#temp_div").show();
    console.log($("#temp_div"));
});

/*nav에 버튼 클릭 했을경우 (portfolio..등등)*/

 $(".sh").on("click", function(){
       
     $("#right-2").show();
     $("#right-3").show();
     $("#right-4").show();
     $("#temp_div").empty().hide();
     
     console.log($("#temp_div"));
 });




/* 공통부분 */
function layerOut(){
    $("#layer").css("display", "none");
    $("#container").css("opacity", "1");
    $("#login-box").css("display", "none");
}

