/*****************************/

        //objetos.js - Meetup 2

        // Women Who Code Recife

 /*****************************/


 // Obs: Lembrando teste o seu código no console do navegador.





/***********  # 1 Criar Objeto Notebook.*************/

// código aqui
notebook = {}





/*********** # 2 Adicionando as propriedades. *************/

// código aqui
notebook.sistema = "Mac";
notebook.screensize = 15;
notebook.anoCompra = 2015;


/***********  # Acessando objeto com a notaçāo "." *************/


// código aqui
console.log(notebook.sistema);
console.log(notebook.screensize);
console.log(notebook.anoCompra);


/***********  Acessando objeto com a notaçāo []  *************/

// código aqui
console.log(notebook["sistema"]);
console.log(notebook["screensize"]);
console.log(notebook["anoCompra"]);


/***********  # Alterar valores do objeto.  *************/

// código aqui
notebook.sistema = "Windows";
notebook.screensize = 14;
notebook.anoCompra = 2014;


console.log(notebook);



/***********  Remova o último item do array. *************/

// código aqui
var girls = ["Karina", "Simone", "Veridiana", "Willany"];

console.log(girls);

girls.pop();

console.log(girls);