class Pollera {
    constructor (codigo, tipo, color, precio) {
        this.codigo = codigo;
        this.tipo = tipo;
        this.color = color;
        this.precio = precio;
        this.cantidad = 8;
    }
    vender(cantidad) {
        if(this.cantidad == 0) {
            alert("Sin stock");
        }
        else if (this.cantidad < cantidad) {
            alert(`Quedan en stock solamente ${this.cantidad} polleras`);
        }
        else {
            this.cantidad = this.cantidad - cantidad;
            alert(`Cantidad vendida: ${cantidad}.\nQuedan en stock ${this.cantidad}`);
        }
    }
    reponerStock(cantidad) {
        this.cantidad = this.cantidad + cantidad;
        alert(`Cantidad comprada: ${cantidad}.\nQuedan en stock ${this.cantidad}`)
    }
}

class Calza {
    constructor (codigo, tipo, color, precio) {
        this.codigo = codigo;
        this.tipo = tipo;
        this.color = color;
        this.precio = precio;
        this.cantidad = 9;
    }
    vender(cantidad) {
        if(this.cantidad == 0) {
            alert("Sin stock");
        }
        else if (this.cantidad < cantidad) {
            alert(`Quedan en stock solamente ${this.cantidad} calzas`);
        }
        else {
            this.cantidad = this.cantidad - cantidad;
            alert(`Cantidad vendida: ${cantidad}.\nQuedan en stock ${this.cantidad}`);
        }
    }
    reponerStock(cantidad) {
        this.cantidad = this.cantidad + cantidad;
        alert(`Cantidad comprada: ${cantidad}.\nQuedan en stock ${this.cantidad}`)
    }
}

class Remera {
    constructor (codigo, tipo, color, precio) {
        this.codigo = codigo;
        this.tipo = tipo;
        this.color = color;
        this.precio = precio;
        this.cantidad = 6;
    }
    vender(cantidad) {
        if(this.cantidad == 0) {
            alert("Sin stock");
        }
        else if (this.cantidad < cantidad) {
            alert(`Quedan en stock solamente ${this.cantidad} remeras`);
        }
        else {
            this.cantidad = this.cantidad - cantidad;
            alert(`Cantidad vendida: ${cantidad}.\nQuedan en stock ${this.cantidad}`);
        }
    }
    reponerStock(cantidad) {
        this.cantidad = this.cantidad + cantidad;
        alert(`Cantidad comprada: ${cantidad}.\nQuedan en stock ${this.cantidad}`)
    }
}

class Buzo {
    constructor (codigo, tipo, color, precio) {
        this.codigo = codigo;
        this.tipo = tipo;
        this.color = color;
        this.precio = precio;
        this.cantidad = 4;
    }
    vender(cantidad) {
        if(this.cantidad == 0) {
            alert("Sin stock");
        }
        else if (this.cantidad < cantidad) {
            alert(`Quedan en stock solamente ${this.cantidad} buzos`);
        }
        else {
            this.cantidad = this.cantidad - cantidad;
            alert(`Cantidad vendida: ${cantidad}.\nQuedan en stock ${this.cantidad}`);
        }
    }
    reponerStock(cantidad) {
        this.cantidad = this.cantidad + cantidad;
        alert(`Cantidad comprada: ${cantidad}.\nQuedan en stock ${this.cantidad}`)
    }
}

const prendasDeRopa = [];

prendasDeRopa.push(new Pollera (1, "Pollera", "Blanca", 7000));
prendasDeRopa.push(new Pollera (2, "Pollera", "Negra", 7500));
prendasDeRopa.push(new Pollera (3, "Pollera", "Gris", 7300));
prendasDeRopa.push(new Calza (4, "Calza", "Roja", 8500));
prendasDeRopa.push(new Calza (5, "Calza", "Negra", 9500));
prendasDeRopa.push(new Remera (6, "Remera", "Blanca", 6500));
prendasDeRopa.push(new Remera (7, "Remera", "Negra", 6700));
prendasDeRopa.push(new Remera (8, "Remera", "Azul", 6600));
prendasDeRopa.push(new Remera (9, "Remera", "Verde", 5000));
prendasDeRopa.push(new Buzo (10, "Buzo", "Gris", 11500));
prendasDeRopa.push(new Buzo (11, "Buzo", "Azul", 12600));

const filtrarPorPrenda = () => {
    let indiquePrenda = prompt(`Indique que tipo de prenda desea ver: Pollera, Calza, Remera o Buzo`);
    const filtrado = prendasDeRopa.filter((prenda) => prenda.tipo === indiquePrenda); 
    while (filtrado == false) {
        indiquePrenda = prompt("Ese comando no fue encontrado. Intentelo de nuevo.");
        filtrado = prendasDeRopa.filter((prenda) => prenda.tipo === indiquePrenda);
    }
    let mensaje = "";
    for(const articulo of filtrado) {
        mensaje = mensaje + `\nCódigo: ${articulo.codigo} \n Tipo:${articulo.tipo} \n Precio: ${articulo.precio} \n Color: ${articulo.color}\n`;
    }
    mensaje = `Prendas encontradas:\n ${mensaje}`
    alert(mensaje);
    return mensaje;
}

const filtrarPorPrecio = () => {
    let indiquePrecio = Number(prompt(`Indique el importe máximo que esta dispuesto a pagar.`));
    const filtrado = prendasDeRopa.filter((prenda) => prenda.precio <= indiquePrecio);
    while (filtrado.length == 0 ) {
        indiquePrecio = Number(prompt("Ese comando no fue encontrado. El precio no puede ser minimo a 5000."));
        filtrado = prendasDeRopa.filter((prenda) => prenda.precio <= indiquePrecio);
    }
    let mensaje = "";
    for(const articulo of filtrado) {
        mensaje = mensaje + `\nCódigo: ${articulo.codigo} \n Tipo:${articulo.tipo} \n Precio: ${articulo.precio} \n Color: ${articulo.color}\n`;
    }
    alert(`Prendas encontradas:\n ${mensaje}`);
}


const navegaYCompra = (mostrarResultado) => { 
    let deseaComprar = prompt(`Desea comprar alguna de estas prendas? Responda con "si" o "no"`);
        while (deseaComprar != "si" && deseaComprar != "no") {
            deseaComprar = prompt(`Opcion incorrecta. Vuelva a intentarlo.`);
        }

    if (deseaComprar == "no") {
        let volverAlMenu = prompt(`Desea volver al menu inicial? Responda con "si" o "no"`);
        while (deseaComprar != "si" && deseaComprar != "no") {
            deseaComprar = prompt(`Opcion incorrecta. Vuelva a intentarlo.`);
        }
        if(volverAlMenu == "si") {
            menuDeOpciones();
        }
        else {
            alert("Gracias por su visita!");
        }
    } 
    else if (deseaComprar == "si") {
        alert("Seleccione el código de la prenda que desea comprar");
        alert(mostrarResultado);
        let codigoDePrenda = Number(prompt("Indique el número de código"));
        while (codigoDePrenda > 11) {
            codigoDePrenda = Number(prompt("Los codigos de prenda van de 1 a 11."));
        }
        for(const articulo of prendasDeRopa) {
            if (articulo.codigo == codigoDePrenda) {
                let cantidadAComprar = Number(prompt("Indique la cantidad que desea comprar"));
                articulo.vender(cantidadAComprar);
            }
        }
    }
}

alert(`Bienvenidos a FitLife!!`);
const menuDeOpciones = () => {
    let menu = prompt(`Por favor indica la opción deseada:\n Para ver todas las prendas: "a"\n Para filtrar por tipo de prenda: "b"\n Para filtrar por precio: "c"`);
    while (menu != "a" && menu != "b" && menu != "c") {
        menu = prompt(`Opcion incorrecta. Vuelva a intentarlo.`);
    }
    switch(menu) {
        case ("a"):
            let todasLasPrendas = "";
            for(const articulo of prendasDeRopa) {
                todasLasPrendas = todasLasPrendas +`\nCódigo: ${articulo.codigo} \n Tipo:${articulo.tipo} \n Precio: ${articulo.precio} \n Color: ${articulo.color}\n`;
            }
            alert(`Prendas:\n ${todasLasPrendas}`);
            navegaYCompra(todasLasPrendas);
            break;
        case ("b"):
            navegaYCompra(filtrarPorPrenda());
            break;
        case ("c"):
            navegaYCompra(filtrarPorPrecio());
            break;
    }
    
}

menuDeOpciones();
