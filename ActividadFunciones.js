// Ejercicio 1

const convertirAcelsius = celsius => ( celsius * 9 / 5 ) + 32;

console.log("conversor de temperatura:");
console.log(`25°C son ${convertirACelsius(25)}°F`);
console.log(`0°C son ${convertirACelsius(0)}°F`);
console.log(""); 


// Ejercicio 2

const generarMensaje = (nombre, edad) => `Hola ${nombre}, tienes ${edad} años de edad.`;

console.log("Generador de mensajes personalizados");
console.log(generarMensaje("juan", 30));
console.log(generarMensaje("ana", 22));
console.log("");

// Ejercicio 3

const covertirMillasAkm = millas  => (millas * 1.60934).toFixed(2);

console.log(" conversor de millas a kilometros:");
console.log(`5 millas son ${convertirMillasAKm(5)} km`);
console.log(`10 millas son ${convertirMillasAKm(10)} km`);
console.log("");

// Ejercicio 4

const consejoclima = clima  =>
    clima === "lluvioso"
    ? "Recuerda llevar un paraguas"
    :  clima === "soleado"
    ? "Recuerda llevar un sombrero"
    : "clima no reconocido, vistete adecuadamente.";

    console.log("Consejos según el clima:");
    console.log(consejoClima("lluvioso"));
    console.log(consejoClima("soleado"));
    console.log(consejoclima("nublado"));