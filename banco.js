let cuentas = [];
let movimientos = [];
let cuentaActual = null;

agregarCuenta = function(){

    let cedula = recuperarTexto("cedula");
    let nombre = recuperarTexto("nombre");
    let apellido = recuperarTexto("apellido");
    let numeroCuenta = recuperarTexto("numeroCuenta");

    let existe = cuentas.find(c => c.numeroCuenta === numeroCuenta);

    if(existe){
        alert("Cuenta duplicada");
        return;
    }

    let nuevaCuenta = {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        numeroCuenta: numeroCuenta,
        saldo: 0
    };

    cuentas.push(nuevaCuenta);

    mostrarCuentas();
}


mostrarCuentas = function(){

    let tabla = document.getElementById("tablaCuentas");
    if(!tabla) return;

    tabla.innerHTML = "";

    for(let i = 0; i < cuentas.length; i++){
        tabla.innerHTML += `
            <tr>
                <td>${cuentas[i].cedula}</td>
                <td>${cuentas[i].nombre}</td>
                <td>${cuentas[i].apellido}</td>
                <td>${cuentas[i].numeroCuenta}</td>
                <td>${cuentas[i].saldo}</td>
            </tr>
        `;
    }
}
