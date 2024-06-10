//EJERCICIOS CON FUNCIONES EN TYPESCRIPT

//1
function saludar() {
    console.log("Holaaaa TypeScript :D");
  }
  
  saludar();
  
  //2
  function multiplicacion(x: number, y: number): number {
    return x * y;
  }
  
  console.log(multiplicacion(2, 3));
  
  //3
  let saludo = function () {
    `console.log(Hola profe 👍);`
  };
  
  saludo();
  
  //4
  
  let elevar = function (num: number, exp: number): number {
    return num ** exp;
  };
  
  console.log(elevar(2, 5));
  
  //5
  
  function conversacion(persona1: string, persona2: string, persona3: string) {
    console.log(
      `Hola ${persona1} viste a ${persona2}, pense que estaba con ${persona3}`
    );
  }
  
  conversacion("Nicolas", "jose", "juan");
  
  //6
  function estado(persona1: string, persona2: string = "no esta disponible") {
    console.log(
     ` ${persona1} se encuentra en el trabajo y Nicolas ${persona2}`
    );
  }
  
  estado("Jose", "esta durmiendo");
  
  //FUNCIONES FLECHA EN TYPESCRIPT
  
  //1
  
  const resta = (num1: number, num2: number): number => {
    return num1 - num2;
  };
  
  console.log(resta(1, 1));
  
  //2
  
  let salud2 = () => console.log("Hola de nuevo typescript");
  
  salud2();
  
  //3
  
  function add(a: string, b: string): string;
  function add(a: number, b: number): number;
  
  function add(a: any, b: any): any {
    return a + b;
  }
  
  console.log(add("Adios ", "steve"));
  console.log(add(2, 45));
  
  //4
  
  const lista = (...lista: string[]) => {
    console.log(`Tenemos en la lista a ${lista} `);
  };
  
  lista("jose", "juan", "pedro");
  lista("jose");