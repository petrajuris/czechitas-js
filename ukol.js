let indian
let radek = "";
for (indian = 1; indian < 10; indian++) {
  if (indian % 3) {
    radek = radek + indian + " " + "little,";
  } else {
    radek = radek + indian + " " + "little Indians";
    console.log(radek);
    radek = "";
  }
}
console.log(indian + " little Indian boys.\n")

for (indian = 10; indian > 1; indian--) {
    if (indian != 8 && indian != 5 && indian != 2) {
      radek = radek + indian + " " + "little,";
    } else {
      radek = radek + indian + " " + "little Indians";
      console.log(radek);
      radek = "";
    }
  }
  console.log(indian + " little Indian boy.")