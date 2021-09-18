let stocks = {
    fruits: ['banana', 'apple', 'mango', 'vanilla'],
    liquid: ['ice', 'water'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
}

// promise in javascript
let shop_status = false
let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (shop_status) {
            setTimeout(() => {
                resolve(work())
            }, time)
        }
        else {

            reject(console.log('The shop is closed'))

        }
    })
}
order(2000, () => console.log(`${stocks.fruits[3]}is selected.`))
    .then(() => {
        return order(0000, () => {
            console.log('The production is started.')
        })
    })
    .then(() => {
        return order(1000, () => {
            console.log('The food has been chopped.')
        })
    })
    .then(() => {
        return order(2000, () => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added.`)
        })
    })
    .then(() => {
        return order(1000, () => {
            console.log('The machine is started.')
        })
    })
    .then(() => {
        return order(2000, () => {
            console.log(`The icecream was placed on the ${stocks.holder[0]}`)
        })
    })
    .then(() => {
        return order(3000, () => {
            console.log(`The toppings of ${stocks.toppings[0]} was added`)
        })
    })
    .then(() => {
        return order(1000, () => {
            console.log('The icecream was served')
        })
    })
    .catch(() => {
        console.log('Customer left');
    })
    .finally(() => {
        console.log('Day ended')
    });

