var peliculas = ["Venom 2: Carnage Liberado", "Duna", "Cuando el demonio llama"];
var pel1 = [];
var pel2 = [];
var pel3 = [];

var selectUser = document.getElementById("title");


for(index in peliculas){
    selectUser.options[selectUser.options.length] = new Option(peliculas[index]);
}


function addTicket(e){
    
    pelicula = document.getElementById("title").value;
    asiento = document.getElementById("place").value;
    let asientoOcupado = false;
    if(pelicula != "" &&  asiento != ""){
        switch(pelicula){
            case peliculas[0]:
                e.preventDefault();
                if(pel1.length === 0){
                    ticketNuevo = new Venom(asiento);
                    pel1.push(ticketNuevo);
                }else{
                    for(let i = 0; i < pel1.length; i++){
                        if(pel1[i].getAsiento() == asiento){
                            asientoOcupado = true;
                        }
                    }

                    if(asientoOcupado === false){
                        ticketNuevo = new Venom(asiento);
                        pel1.push(ticketNuevo);
                        document.getElementById("message").innerHTML = "";
                    }else{
                        document.getElementById("message").innerHTML = "Elija otro asiento";
                    }
                }
                readTicket(event);
                console.log("Venom 2: Carnage Liberado");
                break;
            case peliculas[1]:
                e.preventDefault();
                if(pel2.length === 0){
                    ticketNuevo = new Duna(asiento);
                    pel2.push(ticketNuevo);
                }else{
                    for(let i = 0; i < pel2.length; i++){
                        if(pel2[i].getAsiento() == asiento){
                            asientoOcupado = true;
                        }
                    }

                    if(asientoOcupado === false){
                        ticketNuevo = new Duna(asiento);
                        pel2.push(ticketNuevo);
                        document.getElementById("message").innerHTML = "";
                    }else{
                        console.log("Elija otro asiento");
                        document.getElementById("message").innerHTML = "Elija otro asiento";
                    }
                }
                readTicket(event);
                console.log("Duna");
                break;
            case peliculas[2]:
                e.preventDefault();
                if(pel3.length === 0){
                    ticketNuevo = new Demonio(asiento);
                    pel3.push(ticketNuevo);
                }else{
                    for(let i = 0; i < pel3.length; i++){
                        if(pel3[i].getAsiento() == asiento){
                            asientoOcupado = true;
                        }
                    }

                    if(asientoOcupado === false){
                        ticketNuevo = new Demonio(asiento);
                        pel3.push(ticketNuevo);
                        document.getElementById("message").innerHTML = "";
                    }else{
                        console.log("Elija otro asiento");
                        document.getElementById("message").innerHTML = "Elija otro asiento";
                    }
                }
                readTicket(event);
                console.log("Cuando el demonio llama");
                break;
            default: 
                console.log("Nada");
        }
        
        
    }
    
}



function readTicket(e){
    e.preventDefault();
    tabla = document.getElementById("tabla").value;
    tabla = `<tr class="text-center">
                <th>ID</th>
                <th>Pelicula</th>
                <th>Duracion</th>
                <th>Asiento</th>
            </tr>`
    for(pelic1 of pel1){
        tabla += `<tr class="text-center">
                    <td>${pelic1.getId()}</td>
                    <td>${pelic1.getNombre()}</td>
                    <td>${pelic1.getDuracion()}</td>
                    <td>${pelic1.getAsiento()}</td>
                    <td> <button id="del" onclick="deleteTicket(event,${pelic1.getCont()},pelic1.getNombre())"><i class="fa fa-times" aria-hidden="true"></i></button></td>
                </tr>`
    }

    for(pelic2 of pel2){
        tabla += `<tr class="text-center">
                    <td>${pelic2.getId()}</td>
                    <td>${pelic2.getNombre()}</td>
                    <td>${pelic2.getDuracion()}</td>
                    <td>${pelic2.getAsiento()}</td>
                    <td> <button id="del" onclick="deleteTicket(event,${pelic2.getCont()},pelic2.getNombre())"><i class="fa fa-times" aria-hidden="true"></i></button></td>
                </tr>`
    }

    for(pelic3 of pel3){
        tabla += `<tr class="text-center">
                    <td>${pelic3.getId()}</td>
                    <td>${pelic3.getNombre()}</td>
                    <td>${pelic3.getDuracion()}</td>
                    <td>${pelic3.getAsiento()}</td>
                    <td> <button id="del" onclick="deleteTicket(event,${pelic3.getCont()},pelic3.getNombre())"><i class="fa fa-times" aria-hidden="true"></i></button></td>
                </tr>`
    }
    document.getElementById("tabla").innerHTML = tabla;
}

function deleteTicket(e,id,movie){
    console.log(id)
    switch(movie){
        case peliculas[0]:
                e.preventDefault();
                for(let i=0; i<pel1.length; i++){
                    if(pel1[i].getCont() == id){
                        pel1.splice(i,1);
                    }
                }
                readTicket(event);
                break;
            case peliculas[1]:
                e.preventDefault();
                for(let i=0; i<pel2.length; i++){
                    if(pel2[i].getCont() == id){
                        pel2.splice(i,1);
                    }
                }
                readTicket(event);
                break;
            case peliculas[2]:
                e.preventDefault();
                for(let i=0; i<pel3.length; i++){
                    if(pel3[i].getCont() == id){
                        pel3.splice(i,1);
                    }
                }
                readTicket(event);
                break;
            default: 
                console.log("Nada");
    }
    
}

function buscarTicket(e){
    e.preventDefault();
    let ticket = document.getElementById("busqueda").value;
    let encontrado = false;
    let table = document.getElementById("tabla");

    
        for (let j = 1; col = table.rows[j]; j++) {
            if(ticket === col.cells[0].innerText){
                console.log(`Si hay ${col.cells[0].innerText}`);
                table.rows[j].style.color = "lightgreen";
                table.rows[j].style.backgroundColor = "green";
                encontrado = true;
            }
        }

        if(encontrado === false){
            document.getElementById("message").innerHTML = "Ticket no encontrado";
        }else{
            document.getElementById("message").innerHTML = "";
        }
    
}
