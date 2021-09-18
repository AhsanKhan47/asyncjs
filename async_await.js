let stocks = {
    fruits: ['banana', 'apple', 'mango', 'vanilla'],
    liquid: ['ice', 'water'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
}

let is_shop_open = true;

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




let topping_choice = () => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            resolve()
        }
    })
}

async function kitchen() {
    .try {
        return topping_choice(){
            setTimeout(() => {

            })
        }

    }
    .catch (error) {

    }
    .finally {

    }
}