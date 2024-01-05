

var tetmarksofA
var tetmarksofB
var tetmarksofC

    tetmarksofA = 68
    tetmarksofB = 107
    tetmarksofC = 92

// determine who can passed tet

if (tetmarksofA > 90){
        console.log('A passed');
}
else {
        console.log('A failed');
    }

if (tetmarksofB > 90){
        console.log('B passed');
}
else  if(tetmarksofB < 90 ){
        console.log('B failed');
}    

if (tetmarksofC > 90){
        console.log('C passed');
}
else if(tetmarksofC < 90){
        console.log('C failed');
}

// function tetresult (tetmarks){
//         if(tetmarks > 90){
//                 console.log('passed')
// }

//         else if(tetmarks < 90){
//                 console.log('failed')        
// }}

// tetresult(tetmarksofA);
// tetresult(tetmarksofB);
// tetresult(tetmarksofC);
