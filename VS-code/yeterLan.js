const npc = prompt("Metni daxil ele:");
let ters = ""
let soz = ""
for (let i = npc.length - 1; i >= 0; i--) {
    if (npc[i] !== " ") {

        soz = npc[i] + soz;
    } else {

        if (soz !== "") {
            if (ters !== "") {
                ters = ters + " ";
            }
            ters = ters + soz
            soz = ""
        }
    }
}
if (soz !== "") {
    if (ters !== "") {
        ters = ters + " ";
    }
    ters = ters + soz
}
alert("Ters nətice: " + ters)
console.log("Ters netice:", ters)
//tap2
let blah = prompt("eded daxil ele tez ol doyerem seni:") 
for (let i = 1; i <= 10; i++) {
  blah = blah * i; 
}
console.log("cavab", blah);
alert("cavab" + blah);
//tap3
for (let i = 11; i <= 99; i += 2) {
    console.log(i);
}  