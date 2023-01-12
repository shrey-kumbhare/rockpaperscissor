var choices=["rock","paper","scissor"];
var sChoice;
var UChoice;
var started=false;
$(document).keypress(function(){
    if(!started)
    {  
      main();
    }
});
function main(){
    $(".rock").click(function(){
        UChoice="rock";
        $(".paper").remove();
        $(".scissor").remove();});
        $(".paper").click(function(){
            UChoice="paper"
            $(".rock").remove();
            $(".scissor").remove();});
        $(".scissor").click(function(){
            UChoice="scissor"
            $(".rock").remove();
            $(".paper").remove();});
    var count = 4;
    function anim() {
        if (count > 0) {
            $("h1").text(count);
            count--;
            setTimeout(anim, 700);
        }
        else{
            systermChoice();
        }
    }
    anim();
            
}
function systermChoice(){
    var randno=Math.floor(Math.random()*3);
    if (choices[randno]=="rock"){
        $(".paperS").remove();
        $(".scissorS").remove();
    }else if (choices[randno]=="paper"){
        $(".rockS").remove();
        $(".scissorS").remove();
    }else if (choices[randno]=="scissor"){
        $(".rockS").remove();
        $(".paperS").remove();
    }
    sChoice=choices[randno];
    checkanswer()
    
}
function checkanswer(){
    if (UChoice==sChoice){
        $("h1").text("DRAW");
        $("body").addClass("draw");
    }else if ((UChoice=="rock" && sChoice=="scissor") ){
        $("h1").text("YOU WON");
        $("body").addClass("you-won");
    }else if (UChoice=="paper" && (sChoice=="rock")){
        $("h1").text("YOU WON");
        $("body").addClass("you-won");
    }else if (UChoice=="scissor" && (sChoice=="rock")){
        $("h1").text("YOU WON");
        $("body").addClass("you-won");
    }else{
        $("h1").text("YOU LOST");
        $("body").addClass("game-over");
    }
    setTimeout(() => {
        document.location.reload();
      }, 2000);
    
}