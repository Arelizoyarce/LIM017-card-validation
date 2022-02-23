const validator = {
  isValid: function (creditCardNumber) {
          let arrayCreditCard = Array.from(creditCardNumber);
          let arrayCC2 = [];
          let totalCC= 0;
         

          for(let i=0; i<arrayCreditCard.length; i++){
              arrayCC2.push(parseInt(arrayCreditCard [i]));
          }

          arrayCC2.reverse();

          for(let i = 0; i<arrayCC2.length;i++){
              if((i+1)%2==0){
                  arrayCC2[i]= arrayCC2[i]*2;
                  if(arrayCC2[i]>=10){
                      arrayCC2[i]-=9;
                  }
              totalCC+=arrayCC2[i];
              }
              else {
              totalCC+= arrayCC2[i];
          }
          

      }
      if(totalCC%10==0){
          return true
      }
      else {
          return false
      }
     
  },
  maskify: function (creditCardNumber){

      let hideDigits= creditCardNumber.slice(0, -4).replace(/./g, '#');
      let lastFour= creditCardNumber.slice(-4);
      creditCardNumber= hideDigits+lastFour;
      return creditCardNumber;
      
  },
};
export default validator;

