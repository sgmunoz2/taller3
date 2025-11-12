
document.addEventListener("DOMContentLoaded", function () {

    const sumarBtn = document.getElementById("sumarBtn")
    const restarBtn = document.getElementById("restarBtn")
    const multBtn = document.getElementById("multBtn")
    const dividirBtn = document.getElementById("dividirBtn")

    const resultadoDiv = document.getElementById("resultadoDiv")
    const resultadoTexto = document.getElementById("resultadoTexto")

    sumarBtn.addEventListener("click", function () {
        const numero1 = document.getElementById("num1Input").value;
        const numero2 = document.getElementById("num2Input").value;
        if (validarNumeros(numero1, numero2)) {
            // Mostrar color verde de exito
            resultadoDiv.style.backgroundColor = "#68fcb0ff";
            resultadoDiv.style.padding = "4px 10px";
            let resultado = parseFloat(numero1, 10) + parseFloat(numero2, 10);
            mostrarResultado(resultado);
        }
    });

    restarBtn.addEventListener("click", function () {
        const numero1 = document.getElementById("num1Input").value;
        const numero2 = document.getElementById("num2Input").value;
        if (validarNumeros(numero1, numero2)) {
            resultadoDiv.style.backgroundColor = "#68fcb0ff";
            resultadoDiv.style.padding = "4px 10px";
            let resultado = parseFloat(numero1, 10) - parseFloat(numero2, 10);
            mostrarResultado(resultado);
        }
    });

    multBtn.addEventListener("click", function () {
        const numero1 = document.getElementById("num1Input").value;
        const numero2 = document.getElementById("num2Input").value;
        if (validarNumeros(numero1, numero2)) {
            resultadoDiv.style.backgroundColor = "#68fcb0ff";
            resultadoDiv.style.padding = "4px 10px";
            let resultado = parseFloat(numero1, 10) * parseFloat(numero2, 10);
            mostrarResultado(resultado);
        }
    });

    dividirBtn.addEventListener("click", function () {
        const numero1 = document.getElementById("num1Input").value;
        const numero2 = document.getElementById("num2Input").value;


        if (validarNumeros(numero1, numero2)) {
            if (parseFloat(numero2) == 0) {
                resultadoDiv.style.backgroundColor = "#ff6b6bff";
                resultadoDiv.style.padding = "4px 10px";
                resultadoTexto.textContent = `No se puede dividir para 0!`;
                return;
            }
            // Mostrar color verde de exito
            resultadoDiv.style.backgroundColor = "#68fcb0ff";
            resultadoDiv.style.padding = "4px 10px";
            let resultado = parseFloat(numero1, 10) / parseFloat(numero2, 10);
            mostrarResultado(resultado);
        }
    });

    function mostrarResultado(resultado) {
        resultadoTexto.textContent = `El resultado es : ${resultado}`;
    }

    function validarNumeros(num1, num2) {
        let num1Parsed = parseFloat(num1, 10);
        let num2Parsed = parseFloat(num2, 10); // 10 es la base
        var valido = true;

        resultadoTexto.textContent = "";

        if (isNaN(num1Parsed)) {
            resultadoDiv.style.backgroundColor = "#fc6880";
            resultadoTexto.textContent = resultadoTexto.textContent + `El numero 1: ${num1} no es un numero valido`;
            valido = false;
        }

        if (isNaN(num2Parsed)) {
            resultadoDiv.style.backgroundColor = "#fc6880";
            resultadoTexto.textContent = resultadoTexto.textContent + `El numero 2: ${num2} no es un numero valido`;
            valido = false;
        }

        return valido;

    }


    /* TEMA 2 FORMULARIO */

    const formulario = document.getElementById("registroForm")
    const salidaFormulario = document.getElementById("textoSalida")

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        if (validarFormulario()) {
            salidaCorrecta()
        }
    })

    function validarFormulario() {
        let valido = true;
        const nombre = document.getElementById("nombreInput").value.trim();
        salidaFormulario.textContent = "";

        /* nombre */
        if (nombre === "") {
            salidaError("El nombre es obligatorio")
            valido = false;
        } else if (nombre.lenght < 2) {
            salidaError("El nombre debe contener mas de 2 letras")
            valido = false;
        }

        /* correo */
        const correo = document.getElementById("emailInput").value.trim();
        let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (correo === "") {
            salidaError("El correo es obligatorio")
            valido = false;
        } else if (!emailRegex.test(correo)) {
            salidaError("El correo no cumple con el formato")
            valido = false;
        }

        /* contrasena */

        const password = document.getElementById("passwordInput").value.trim();
        if (password === "") {
            salidaError("La contraseña es obligatoria")
            valido = false;
        } else if (password.lenght < 6) {
            salidaError("La contraseña debe de tener 6 o mas letras")
            valido = false;
        }
        /* fecha */
        const fecha = document.getElementById("registrarseBtn")
        if (fecha === "") {
            salidaError("fecha es obligatoria")
            valido = false;
        }

        return valido;
    }



    function salidaError(error) {
        const salidaFormulario = document.getElementById("salidaFormulario")
        salidaFormulario.style.backgroundColor = "#fc6868ff";
        salidaFormulario.textContent = salidaFormulario.textContent + error;
    }
    function salidaCorrecta() {
        const salidaFormulario = document.getElementById("salidaFormulario")
        salidaFormulario.style.backgroundColor = "#68fcb0ff";
        salidaFormulario.textContent = "";
        salidaFormulario.textContent = "Registro realizado exitosamente";
    }


    /* fechas */
    const calcfecha = document.getElementById("calcfecha")

    calcfecha.addEventListener("click", function () {
        const fechaInput1 = document.getElementById("fecha1Input").value
        const fechaInput2 = document.getElementById("fecha2Input").value
        const textoSalidaFecha = document.getElementById("textoSalidaFecha")
        textoSalidaFecha.textContent = `La diferencia de dias es ${calcularDiferenciaFechas(fechaInput1, fechaInput2)}.`
    })

    function calcularDiferenciaFechas(fecha1, fecha2) {
        if (validarFechas(fecha1, fecha2)) {
            const fechaInput1 = document.getElementById("fecha1Input").value
            const fechaInput2 = document.getElementById("fecha2Input").value
            const date1 = new Date(fechaInput1);
            const date2 = new Date(fechaInput2);

            let salida = Math.abs(date2 - date1);
            salida = Math.ceil(salida)
            return salida;
        }

    }

    function validarFechas(fecha1, fecha2) {
        const fechaInput1 = document.getElementById("fecha1Input").value
        const fechaInput2 = document.getElementById("fecha2Input").value
        return fechaInput1 !== "" && fechaInput2 !== "";
    }


});




