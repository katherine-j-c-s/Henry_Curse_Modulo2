const uRL = "http://localhost:5000/amigos";

let agregar = $("#boton")

let viewList = () => {
    let lista = $("#lista");
    lista.empty()//paara vaciar el alemento
    $.get(`${uRL}`, (data) => {
        data.forEach(element => {
            lista.append(`<li>${element.name}</li>`) //ya crea el li el elemento en el ul
        });
    })
}

agregar.click(viewList);

// $('#boton').click (function () {
//     $.get("http://localhost:5000/amigos" ,function (data) {
//         for (let i = 0; i < data.length; i++) {
//             var li = document.createElement("li")
//             li.innerHTML = data[i].name
//             $("#lista").append(li)
//         }
//     })
// })

let search = $('#search')

let serachFunc = () => {
    //guarda el valor del input
    let id = $("#input").val()//.val() es un metodo exclusivo para los inputs 
    let amigo = $("#amigo")
    amigo.empty()
    if(id){
        $.get(`${uRL}/${id}`, (data) => {
            amigo.text(data.name)
        })
        
    }else{
        alert("no hay id")
    }
    $("#input").val("")
}

search.click(serachFunc)
// $('#search').click (function () {
//     var input = document.querySelector("#input")
//     var span = document.querySelector("#amigo")
//     $.get(`http://localhost:5000/amigos/${input.value}` ,function (data) {
//         // index = input.value    
//         span.innerHTML = data.name
//         $("#amigo").append(span)
//         // var span = document.querySelector("#amigo")
//         // index = input.value
//         // span.innerHTML = data
//         // $("#amigo").append(span)
//     })
// })

let empty = $('#delete');

let emptyFunc = () => {
    //guarda el valor del input
    let id = $("#inputDelete").val()//.val() es un metodo exclusivo para los inputs 
    if(id){
        var search 
        $.get(`${uRL}`, (data) => {
            search = data.filter((element) => { //guarda en un arr -> []
                return element.id === Number(id) //nos devuelve el que es igual
            }) // un nuevo array con el resultado de las comparacaciones 
            //de los ids del url y el del id
            console.log("search is: ", search);
            let span = $("#success")
            if (search.length === 1) {
                $.ajax({// metodo para eliminar en un ajax
                    url: `${uRL}/${id}`,//busca esto
                    type: "DELELE",//lo elimina
                    success: function (data) { // manda un mensaje
                        span.text(`${search[0].name} se ha eliminado`)
                        viewList()//refreca lista con los elementos que no se eliminaron
                    }
                })
            } else{
                alert("no hay user")
            }
        })
        
        
        
    }else{
        alert("no hay id")
    }
    $("#inputDelete").val("");
}

empty.click(emptyFunc)

//     $('#delete').click (function () {
//         var lista = document.querySelector("#lista")

//         var input = document.querySelector("#inputDelete")
//         $.get(`http://localhost:5000/amigos/${input.value}` ,function (data) {  
//             lista.children[data.id-1].remove()
//         })
//     })