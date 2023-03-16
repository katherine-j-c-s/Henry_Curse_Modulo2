$('#boton').click (function () {
    $.get("http://localhost:5000/amigos" ,function (data) {
        for (let i = 0; i < data.length; i++) {
            var li = document.createElement("li")
            li.innerHTML = data[i].name
            $("#lista").append(li)
        }
    })
    $('#delete').click (function () {
        var lista = document.querySelector("#lista")
        
        var input = document.querySelector("#inputDelete")
        $.get(`http://localhost:5000/amigos/${input.value}` ,function (data) {  
            lista.children[data.id-1].remove()
        })
    })
})
$('#search').click (function () {
    var input = document.querySelector("#input")
    var span = document.querySelector("#amigo")
    $.get(`http://localhost:5000/amigos/${input.value}` ,function (data) {
        // index = input.value    
        span.innerHTML = data.name
        $("#amigo").append(span)
        // var span = document.querySelector("#amigo")
        // index = input.value
        // span.innerHTML = data
        // $("#amigo").append(span)
    })
})
