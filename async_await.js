let stocks = {
    fruits: ['banana', 'apple', 'mango', 'vanilla'],
    liquid: ['ice', 'water'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
}



// let toppings_choice = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log('Which toppings would you love?'))
//         }, 3000)
//     })
// }

// async function kitchen() {
//     console.log('A')
//     console.log('B')
//     console.log('C')

//     await toppings_choice()

//     console.log('D')
//     console.log('E')

// }
// kitchen()
// console.log('cleaning the dishes')
// console.log('cleaning the tables')
// console.log('taking others order')

let is_shop_open = true;

function time(ms){
   return new Promise((resolve, reject)=>{
       if(is_shop_open){
           setTimeout(resolve, ms);
       }
       else{
          reject(console.log('The shop is closed'))
       }
   })
}

async function kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.fruits[3]} is selected `);

        await time(0000);
        console.log('The production is started');

        await time(1000);
        console.log('The food has been chopped')

        await time(2000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added.`)

        await time(0000);
        console.log(`The machine has been started.`)

        await time(3000);
        console.log(`Ice cream was placed on the ${stocks.liquid[0]}`)
        console.log(`The toppings of ${stocks.toppings[0]} was added`)

        await time(1000)
        console.log('The icecream was served')
        
    }
    catch(error){
        
         console.log('the customer left', error)
    }
    finally{
        
        console.log('Day ended.')
    }
}
kitchen();