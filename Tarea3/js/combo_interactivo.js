function menu() {
    let seleccion = document.getElementById('opciones').value;
    // usamos switch de js para elegir las opciones deseadas
    //window.open() es un metodo al que se pasa una url para abrir en una nueva ventana
    //window.location.href = "servicios.html";

    switch (seleccion) {
        case 'A':
            swal.fire({
                icon: "success",
                title: "Retrato",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "retrato.html";
            });
            return;
            //window.open("retrato.html","_self");
        case 'B':
            swal.fire({
                icon: "success",
                title: "Bodas",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "boda.html";
            });
            return;
            //window.open("boda.html","_self");
        case 'C':
            swal.fire({
                icon: "success",
                title: "Paisajes",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "paisaje.html";
            });
            return;
            //window.open("paisaje.html","_self");
        case 'D':
            swal.fire({
                icon: "success",
                title: "Mascotas",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "mascotas.html";
            });
            return;
            //window.open("mascotas.html","_self");
    

    }

}