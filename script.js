$(document).ready(function(){
    $("p").click(function(){
        value = $('p').html()
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
    // $("mydiv").append("<p>"+value+"</p>")
    // })
});
})