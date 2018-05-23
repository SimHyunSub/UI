$("#login").on("click", function(){
    $("#layer").css("display", "block");
    $("#container").css("opacity", "0.5");
    $("#login-box").css("display", "block");
});

$("#layer").on("click", function(){
    layerOut();
});
/*글쓰기 버튼 클릭*/


$("#loginBtn").on("click", function(){
    layerOut();
    location.href="index2.html";
    return false;
});

/* 회원가입 ajax */
$("#joinBtn").on("click", function(){
    layerOut();
    
    
    /*
    $("#temp_div").empty();
    var html = '<div class="join-form">';
    
    $("#right-2").hide();
    $("#right-3").hide();
    $("#right-4").hide();
            
    $("#temp_div").append(html);
    $(".join-form").load("join.html");
    $("#temp_div").show();
    console.log($("#temp_div"));
    */
});

/*nav에 버튼 클릭 했을경우 (portfolio..등등)*/

 $(".sh").on("click", function(){
       
     $("#right-2").show();
     $("#right-3").show();
     $("#right-4").show();
     $("#temp_div").empty().hide();
     
     console.log($("#temp_div"));
 });

$("#joinBtn").on("click", function(){
    $("#layer").css("display", "block");
    $("#container").css("opacity", "0.5");
    $(".join-box").css("display", "block");
});

$("#submit_join").on("click", function(e){
    $(".join-box").css("display", "none");
    $("#layer").css("display", "block");
    $("#container").css("opacity", "0.5");
    $(".send-mail").css("display", "block");
    e.preventDefault;
});


/* 공통부분 */
function layerOut(){
    $(".pw-change-box").hide();
    $(".message-contents").hide();
    $("#layer").css("display", "none");
    $("#container").css("opacity", "1");
    $("#login-box").css("display", "none");
    $(".join-box").css("display", "none");
    $(".send-mail").css("display", "none");
}

$("#logout").on("click", function(){
    location.href = 'index.html';
});

$(".arc-box-img").on("click" , function(){
    location.href = "detail.html";
});

$("#detail-list").on("click" , function(){

    location.href = "index.html";
});

$("#writebtn").on("click" , function(){
    location.href = "write.html";
});


