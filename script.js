// I practice ternary operator 

// const playerGuess = 10;
// const correctNumber = 10;
// let message = '';
// const finalMessage = (playerGuess > correctNumber) ? 'Too high!' : (playerGuess < correctNumber) ? 'Too low!' : 'Congratulations! You guessed the correct number.';
// console.log(finalMessage)

//I practice Switch statement with an example

// function priceList(item){
//     let price = 0;
//     switch(item){
//         case 'coffee':
//             price = 3;
//             break;
//         case 'Sandwich':
//             price = 5;
//             break;
//         case 'Salad':
//             price = 4;
//             break;
//         default:
//             price = "Sorry We don't sales this item"
        
//     }
    
//     const finalPrice = `The price of ${item} is $${price}.`
//     return finalPrice;
// }
// console.log(priceList('lemon'))

// Now I study about Object destructuring

 const dreamHolidays = {
    destination : 'Murree',
    duration : '5 days',
    activities: "Relaxing and  enjoying the scenic beauty",
    accommodation: "Cozy cabin by the lake",

}
const {destination, duration, activities, accommodation} = dreamHolidays;
const finalmessage = `My dream holiday is to ${destination} for ${duration} where I can enjoy ${activities} and stay in a ${accommodation}..`
console.log(finalmessage)

//Now I practice about setTimout function

export function logAnswer(Capital ){
   console.log(`The capital of Pakistan is ${Capital}..`)
   const capital = setTimeout(logAnswer, 3000, Capital)


}
