// console.log('jai sri ram');
// console.log('jai mata di');


var ageOfRam;
var ageOfShyam;

ageOfRam = 10;
ageOfShyam = 21;

// Determibe Who Can Vote ?

// if (ageOfRam > 18) {
//     console.log('Ram can Vote');
// } else {
//     console.log('Ram can NOT Vote');
// }


// if (ageOfShyam > 18) {
//     console.log('Shyam can Vote');
// }

function canVote(personAge, name) {
    if (personAge > 18) {
        console.log(name + ' Can Vote');
    }else {
        console.log(name + ' Can Not Vote');
    }
}



canVote(ageOfRam, 'Ram');
canVote(ageOfShyam, 'Shyam');
canVote(40, 'Ankur');