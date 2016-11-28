let myObj = {
    name: "Tham",
    age: 20,
    exp: 1
}
//let {name, age, exp} = myObj;
let {name: ten, age: tuoi, exp: kinhnghiem} = myObj; // customize property name

console.log(`Toi la ${ten}, ${tuoi} tuoi, kinh nghiem lam viec: ${kinhnghiem}`);