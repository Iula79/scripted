$(document).ready(function(){
    $("p").click(function(){
        localStorage.hello = $('p').html()
        console.log(localStorage.hello)
        // // alert("hello")
        // $.ajax({
        // type: 'POST',
        // url: 'about.html',
        // data: value,
        // success: function(data)
        // {
        //     $('#mydiv').html(data);
        // }

    //});
    // $("#mydiv").html(localStorage.hello);
});
$("#mydiv").click(function(){
$("#mydiv").html(localStorage.hello);
})
});