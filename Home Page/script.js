$(document).on("mousemove", function (event) {
    let vertical = event.pageY;
    let horizontal = event.pageX;
    $(".front-img").css("transform", "translate("+horizontal*0.01 + "px,"+vertical*0.01+"px)");
    console.log("("+vertical+","+horizontal+")")
    // if (Number(vertical)<670)
    // {
    //     $("footer").addClass("remove-animation")
    // }
})