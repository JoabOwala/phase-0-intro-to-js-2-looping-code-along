// Code your solutions in this file
//names, name

const messages = [];
function writeCards(names, name){
    for (let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${name} gift!`);
    }
    return messages;
}


function countDown(myNo){
    while (myNo > -1){
        console.log(myNo);
        myNo--;
    }
}





// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gift) {
//     for (let i = 0; i < gift.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }

//     return gifts;
// }

// wrapGifts(gifts);


// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me`);
// }
