const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc = ["superman", "flash", "Batman"]


// marvel_heros.push(dc);
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);
// const superheros = marvel_heros.concat(dc)
// console.log(superheros);

const all_newheros = [...marvel_heros, ...dc]
// console.log(all_newheros);


const another_array = [1,2,3,[4,5,6],7,[6,7[4,5]]]

const real_another = another_array.flat(Infinity)
console.log(real_another);


console.log(Array.isArray(marvel_heros))
console.log(Array.from("Rohit"))