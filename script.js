$(document).ready(function(){
    $("p").click(function(){
        localstorage.hello = $('p').html()
        console.log(value)
        // alert("hello")
        $.ajax({
        type: 'POST',
        url: 'about.html',
        data: value,
        success: function(data)
        {
            $('#mydiv').html(data);
        }
    });
    $("#mydiv").innerHTML = localStorage.hello
});
})