let cislo = 1
while (cislo <= 100) {
    console.log(cislo)
    cislo += 1
}

for(let i = 0; i < 100; i++){
    console.log(i);
}

for(let i = 100; i> 0; i--){
    console.log(i);
}

//hypotetický příklad, tohle nefunguje
for(let i = 100; (i> 0) && (prijmeni[i] === "Novák"); i--){
    console.log(i);
}