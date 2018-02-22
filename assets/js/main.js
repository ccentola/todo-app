// check off specific todos by clicking
$("li").click(function(){
    $(this).toggleClass("completed");
});

// click on x to delete todo
$("span").click(function(event){
    
    // remove elements by clicking on x
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    
    // stop click from effecting parent elements
    event.stopPropagation;
});