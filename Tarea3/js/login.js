/* cargar la funcion llamada login al dar clic al boton Iniciar */ 
document.getElementById("btn-login").addEventListener("click", login); 

/* funcion que valida la entrada de datos de errores*/ 
function validation_alert(ptext) {
    Swal.fire({
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#8b0000",
        html: '<iframe width="320" height="240" frameborder="0" src="https://lottie.host/embed/361dce4f-7dd0-47e9-9fdb-ac0c44caf48a/NbFBuF0ZSG.lottie"></iframe> <br><p>' + ptext + " </p>",
    });
}

/*funcion llamada login */ 
function login() {
    /* conversion de ID en variables */ 
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    /* variables que guardan el usuario y la clave de acceso  */ 
    let username = "cenfo";
    let password = "123";
    /* variable que almacena en input un array que contiene dos elementos: user_input y pass_input. */ 
    let input = [user_input, pass_input]; 
    /*variable que almacena en input_id los id de elementos HTML, los campos de entrada (input) de un formulario.*/
    let input_id = ["in-txt-user", "in-txt-pass"];
    /*permite contrarolar los errores detectados*/
    let error_count = 0; 
    /*controla el mensaje Usuario o contraseña incorrecta*/
    let text = "";
    /* ciclo que permite validar si los campos de entrada (input) de un formulario están vacío*/
    /* ciclo que permite hacer un recorrido para detecar que campos se borra un error o se agrega un error (borde rojo CSS) */ 
    for (let i = 0; i < input.length; i++) {
        /*recorre todos los elementos del array input y quita el borde rojo.*/ 
        document.getElementById(input_id[i]).classList.remove("error"); 
        /*si el valor del campo de entrada está vacío (""), se ejecuta el bloque de código dentro del if.*/ 
        if (input[i] == "") { 
            text = "Los campos requeridos NO pueden estar vacios.";
            validation_alert(text);
            /*agregar la clase "error" al campo vacío y pone el borde rojo*/ 
            document.getElementById(input_id[i]).classList.add("error"); 
            /*se incrementa la variable error_count, que es la que lleva la cuenta de los errores detectados.*/ 
            /*Si un campo está vacío, aumenta el contador de errores.*/ 
            error_count++;
        }
    }

    /* condicional que permite asegurar de que NO haya errores (error_count == 0), 
    se validaron los campos que no estén vacíos). */ 
    if (error_count == 0) {  
        /*
        si el user_input (usuario ingresado) es igual a username (usuario correcto) y si pass_input (contraseña ingresada) es igual a password (contraseña correcta). 
        si ambos coinciden, significa que las credenciales son correctas.
        */
        if (user_input == username && pass_input == password) {
            Swal.fire({
                title: "Bienvenido",
                showConfirmButton: false,
                customClass: {                 
                    title: 'formatos1',                      
                },
                timer: 5000,
                html: '<iframe width="320" height="240" frameborder="0" src="https://lottie.host/embed/e0cea1bf-4cab-4188-99ae-a6ad67b7add5/0Ee63vC4yi.lottie"></iframe> <br><br><p>Esperar un momento...</p>',                
            }).then(() => {
                /* redirección a una pagina web llamada landing.html */ 
                window.location.href = "landing.html", "blank"; 
            });
            /*si el usuario y la contraseña no coincidenm, se asigna el mensaje "Usuario o contraseña incorrecta." a la variable text.
                se llama a la funcion validation_alert(text) para mostrar un mensaje de error.*/
        } else {
            text = "Usuario o contraseña incorrecta."; 
            validation_alert(text);
        }
    }
}

/* funcion que permite limpiar los campos del FORM HTML */ 
function limpiar(){
    document.getElementById('in-txt-user').value = "";
    document.getElementById('in-txt-pass').value = "";
}
