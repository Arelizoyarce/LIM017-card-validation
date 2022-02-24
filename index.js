import validator from './validator.js';

function hide() {
    let hide = document.getElementById("screen1")
    let show = document.getElementById("screen2")
     hide.style.display= "none"
     show.style.display = "block"
}

let hideScreenOne = document.getElementById("buy")
hideScreenOne.addEventListener("click" , hide)
let hideScreenOne2 = document.getElementById("buy1")
hideScreenOne2.addEventListener ("click", hide)



function menssages (){
   let cardNumber= document.getElementById("creditCardNumber").value;
   let inputExpDate= document.getElementById("InExpirationDte").value;
   let inputCVV= document.getElementById("InCVV").value;
   let validatorCard = validator.isValid(cardNumber);
   let maskedCard= validator.maskify(cardNumber);
   if (cardNumber==""){
            document.getElementById("menssagevalidator").textContent= "*Este campo es obligatorio. Coloque un número de tarjeta"
    }
    else if (validatorCard== true) {
            document.getElementById("menssagevalidator").textContent=""
            document.getElementById("menssageValidorInvalid").textContent="Su tarjeta es válida, la compra ha sido efectudada."
            document.getElementById("creditCardNumber").value= maskedCard
    }
    else{
            document.getElementById("menssagevalidator").textContent="¡Ups! Colocaste un número de tarjeta incorrecto, vuelve a intentar"
    }

    if(inputExpDate==""){
            document.getElementById("expirationDateMenssage").textContent ="*Este campo es obligatorio"
    }
    else{
            document.getElementById("expirationDateMenssage").textContent =""
    }

    if(inputCVV==""){
            document.getElementById("segurityCodesMenssage").textContent ="*Este campo es obligatorio"
    }
    else{
            document.getElementById("segurityCodesMenssage").textContent =""
    }
    
}

let validar = document.getElementById ("validarbtn");
validar.addEventListener("click", menssages); 