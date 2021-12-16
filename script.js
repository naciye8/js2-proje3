let johnAge = 13;
let user = "John";

if (johnAge < 18) {
    console.log(`${user}, ${johnAge} yaşındadır ve meyve suyu içebilir.`)
} else {
    console.log(`${user}, ${johnAge} yaşındadır ve bira içebilir.`)
}
// Yukarıdaki işlemi, Ternary Operatoru kullanarak yaptık.
johnAge > 18 ? console.log(`${johnAge} yaşındadır ve bira içebilir.`) : console.log(`${user}, ${johnAge} yaşındadır ve meyve suyu içebilir.`)

switch (true) {
    case johnAge < 13:
        console.log(`${user}is a boy`)
        break;
    case johnAge >= 13 && johnAge < 20:
        console.log(`${user}is a teenager`)
        break;
    case johnAge >=20 && johnAge <30 :
        console.log(`${user}is a young man`)
        break;
    default:
        console.log (`${user}is a man`)
        break;
}