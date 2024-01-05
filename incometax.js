function calincometax (income){
    if(income <=250000)
       //      console.log('caltax1')
{
       var result = calincometax1(income);
              console.log(result);
}
     else if(income >250000 && income <=500000) {
     var result = calincometax2(income);
              console.log(result);
}
     else if(income > 500000 && income <=1000000){
     var result = calincometax3(income);
              console.log(result);
     }
     else if(income > 1000000){
     var result = calincometax4(income);
              console.log(result);
     }
}

 function calincometax1(income){
    var caltax1 = (income*0)/100
        return caltax1;
 }
 function calincometax2(income){
    var caltax2 = ((income-250000)*5)/100
        return caltax2;
 }
 function calincometax3(income){
    var caltax3 = 12500+((income-500000)*20)/100
        return caltax3;
 }       
 function calincometax4(income){
    var caltax4 = 112500+((income-1000000)*30)/100
        return caltax4;
 }       
       
 

var income = 1042200
var tax = calincometax(income);

var tax = calincometax(2045670);

var tax = calincometax(2040000);

