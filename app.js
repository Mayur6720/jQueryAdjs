// function sum(x,y){
//     return x+(2^y)
// }

// let a=0
// let b=6     

// console.log(sum(a,b));
 
function sum(x,y,z) {
    return x + z*5 - 7 * 7 +1 
}

 let a= 3
 b=4
 c=8
console.log(sum(a, b, c));


$(document).ready(function(){
    $("#btn").click(function(){
        $("#logo").addClass("logos")
    })
    $("#btn").dblclick(function(){
        $(this).hide("#btn")
    })

})

$(document).ready(function(){
    $("#stop").mouseenter(function(){
        $("#slideup").slideDown(2000)
    })
    $("#start").mouseenter(function(){
        $("#slideup").stop().pr
    })
})
