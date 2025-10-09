for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i === 5) {
        break;
    }
}
//tap2
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
} 
//tap3
let arr = ["sans", "Key", "bluudud", "corruptNature"]
console.log(arr)
//tap4
let lit = ["sans", "Rand0m guest", "smt"]
lit[1] = "clasified"
//tap5
const neenja = [
    "hekayeVeyaBolum: Falling Undertale",
    "hekayeVeyaBolum: be scared be angry",
    "hekayeVeyaBolum: we become what we hold:)"
  ];
  neenja.forEach(function(neenja) {
    console.log(neenja);
  });
//tAp6
const Sns = ["cor", "car", 34];
console.log(Sns.push("YAAI"))
console.log(Sns.unshift("oil"))
console.log(Sns.shift());
console.log(Sns.pop());
//(tap7)(taplar)
let undertaleAu = ["ULB'tale", "Swapfell", "Underfell"];
undertaleAu.push("Outerfell");
undertaleAu.pop();  
undertaleAu.unshift("Dusttale"); 
undertaleAu.shift(); 
//tap8
let Murdertale = "Js is fun";
let Snas = Murdertale.split(" "); 
Snas.push("Yeah"); 
let YAAi = Snas.join(" "); 
//tap9
let whatdoyouwant = [];
whatdoyouwant.unshift("DETERMINATION!!!")
whatdoyouwant.push("PATIENCE!!!");
whatdoyouwant.push("REALIABLE!!!");
console.log(whatdoyouwant);
whatdoyouwant.pop();
let whatdoyouwant2 = whatdoyouwant.join(" ---> ");
console.log(whatdoyouwant)
//tap10
const Oge = [16, 89, 35, 23, 9, 50, 734, 83, 930, 1300];
const [snasss, sixseven, ...rememberYourBf] = Oge;
console.log(Oge); 
console.log(snasss); 
console.log(sixseven); 
console.log(rememberYourBf);
//tap11
const omg = [12, 45, 7, 98, 33, 60, 21, 5, 87, 40]
const skale = Math.max(...omg);
console.log(skale);
//tap11
let Snas2 = [3, 7, 11, 15, 20];
console.log("massiv:", );

let Snas3 = [...Snas2];

let snas4 = Snas3.map(number => number * 2);

console.log("---->");
console.log("massiv2:", snas4);
console.log("=>")
console.log("massiv3:", Snas2);