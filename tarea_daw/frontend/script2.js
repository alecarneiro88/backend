function calcular() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const operacion = document.getElementById("operacion").value;


    if (isNaN(a)|| isNaN (b)){
        document.getElementById("resultado").textContent = "Se debe indicar dos números para calcular";
        return;
    }

    let resultado;

    switch (operacion) {
        case "sumar":
            resultado = a + b;
            break;
        case "restar":
            resultado = a - b;
            break;
        case "multiplicar":
            resultado = a * b;
            break;
        case "dividir":
            if (b === 0){
                document.getElementById("resultado").textContent = "No se puede dividir por cero";
                return;
            }
            resultado = a / b;
            break;
        default:
            document.getElementById("resultado").textContent = "La operación indicada no se puede realizar";
            return;
    }

    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}