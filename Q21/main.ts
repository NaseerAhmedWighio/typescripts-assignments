//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


interface item {
    name:string
    price:number
    model: any
}
const Car: item ={
    name: `Lambourghini`,
    model: 2020,
    price: 15000
}
const Mobile: item ={
    name: 'iPhone',
    model: "15Pro max",
    price: 980
}
console.log(`Car Name: ${Car.name}, Price: $${Car.price}, Model: ${Car.model}`)
console.log(`Mobile Name: ${Mobile.name}, Price: $${Mobile.price}, Model: ${Mobile.model}`)
