//ejemplo 1 
function sumar(num1:number,num2:number):number{
if (num1 <= 0 || num2 <=0){
    throw new Error("ingrese un numerp mayor");
    
}return num1 + num2
}
const resultado = sumar(5,3)
console.log(resultado)


//ejemplo 2 
function meses(mes:string){
    switch (mes){
        case "enero":
            console.log ("es enero");
        break
        case "febrero":
            console.log ("es febrero");
        break
        case "marzo":
            console.log ("es marzo");
        break
        case "abril":
            console.log ("es abril");
        break
        case "mayo":
            console.log ("es mayo");
        break
        case "junio":
            console.log ("es junio");
        break
        case "julio":
            console.log ("es julio");
        break
        case "agosto":
            console.log ("es agosto");
        break
        case "septiembre":
            console.log ("es septiembre");
        break
        case "octubre":
            console.log ("es octubre");
        break
        case "noviembre":
            console.log ("es noviembre");
        break
        case "diciembre":
            console.log ("diciembre");
        break
        default:
            throw new Error("este mes no exixte");    
    }
}
meses("enero");

//ejemplo 3 
type Product = {
    name: string;
    price: number;
} | {
    title: string;
    description: string;
};

let product: Product = { name: "bulsa", price: 20 };
console.log(`Producto: ${product.name}, Precio: ${product.price}`);

//ejemplo 4
for (let i: number = 2; i <= 10; i += 2) {
    console.log(i);
}

//ejemplo 5

const number: Array<number>=[1,2,3,4,5,6,7,8,9,10];
 for(const numero of number){
    console.log(`tabla del 8. ${numero*8}`)
}

 //ejemplo 6
 let a:number = 2;
 while (a<=20 && a % 2 === 0){console.log (a)
a+=2
 }

  //ejemplo 7

  const address: {
    readonly street: string;
    readonly city: string;
} = {
    street: `calle 50`,
    city: `Armenia`,
}
console.log(address.city)
console.log(address.street)
//address.street =`calle 14`
//adress.city =`bogota`

//ejemplo 8

const direción = {
    calle: `calle 50`,
    ciudad: `armenia`
}as const;
console.log(direción.calle)
console.log(direción.ciudad)
//address.calle =`calle 14`
//adress.ciudad =`bogota`