
let frances = document.getElementById("frances");
let astrauliano = document.getElementById("astrauliano");
let brioche = document.getElementById("brioche");
let picanha = document.getElementById("picanha");
let costela = document.getElementById("costela");
let vegano = document.getElementById("vegano");
let alface = document.getElementById("alface");
let tomate = document.getElementById("tomate");
let SNsalada = document.getElementById("SNsalada");
let mussarela = document.getElementById("mussarela");
let prato = document.getElementById("prato");
let cheddar = document.getElementById("cheddar");
let nome = document.getElementById("nome");

let valorPao;
let valorBurger;
let valorSalada;
let valorSalada1;
let valorSalada2;
let valorSalada3;
let valorQueijo;
let valorQueijo1;
let valorQueijo2;
let valorQueijo3;


function calculo(){
    if(frances.checked == true){
        valorPao = 3,00
        pao.innerHTML = "Francês";
    }
    else if(astrauliano.checked == true){
        valorPao = 8,00
        pao.innerHTML = "Australiano";
    }
    else if(brioche.checked == true){
        valorPao = 6.00
        pao.innerHTML = "Brioche";
    }
    else{
        valorPao = 0
        pao.innerHTML = "";
    }


    if(picanha.checked == true){
        valorBurger = 13
        burguer.innerHTML = "Picanha";
    }
    else if(costela.checked == true){
        valorBurger = 10
        burguer.innerHTML = "Costela";
    }
    else if(vegano.checked == true){
        valorBurger = 12
        burguer.innerHTML = "Vegano";
    }
    else{
        valorBurger = 0
        burguer.innerHTML = "";
    }


    if(alface.checked == true){
           valorSalada1 = 1.5
           pedidosAlface.innerHTML = "Alface";

    }
    else{
        valorSalada1 = 0
        pedidosAlface.innerHTML = "......";
    }
    if(tomate.checked == true){
        valorSalada2 = 1.5
        pedidosTomate.innerHTML = "Tomate";
    }
    else{
        valorSalada2 = 0
        pedidosTomate.innerHTML = "......";
    }
    if(SNsalada.checked == true){
        valorSalada1 = 0
        valorSalada2 = 0
        pedidosTomate.innerHTML = "......";
        pedidosAlface.innerHTML = "......";
    }

    valorSalada = valorSalada1 + valorSalada2;

    if(mussarela.checked == true){
        valorQueijo1 = 3
        pedidosMussarela.innerHTML = "Mussarela";
    }
    else{
        valorQueijo1 = 0
        pedidosMussarela.innerHTML = ".........";
    }
    if(prato.checked == true){
        valorQueijo2 = 3
        pedidosPrato.innerHTML = "Prato";
    }
    else{
        valorQueijo2 = 0
        pedidosPrato.innerHTML = ".....";
    }
    if(cheddar.checked == true){
        valorQueijo3 = 5
        pedidosCheddar.innerHTML = "Cheddar";
    }
    else{
        valorQueijo3 = 0
        pedidosCheddar.innerHTML = ".......";
    }

    let form = document.getElementById("formulario");
    let nome = form.nome.value;

    pessoa.innerHTML = nome;

    valorQueijo = valorQueijo1 + valorQueijo2 + valorQueijo3
    valorTotal = valorPao + valorBurger + valorSalada + valorQueijo
    total.innerHTML = 'R$' + valorTotal;
    console.log(valorTotal)

}