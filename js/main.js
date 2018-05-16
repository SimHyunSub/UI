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

/* 회원가입 ajax */
$("#joinBtn").on("click", function(){
    layerOut();
    
    /*$("#right-2").css("display", "none");
    $("#right-3").css("display", "none");
    $("#right-4").css("display", "none");
    ----위의 세줄이 있으면 밑에서 empty()함수가 잘 안먹어서 주석처리-----
    */
    
    var html = '<div class="join-form">';
    
    $("#right-2").empty().append(html);
    $("#right-3").empty();
    $("#right-4").empty();
    $(".join-form").load("join.html");
    
});


/* 공통부분 */
function layerOut(){
    $("#layer").css("display", "none");
    $("#container").css("opacity", "1");
    $("#login-box").css("display", "none");
}