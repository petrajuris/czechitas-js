let indian;

for (indian = 1; indian < 10; indian++) {
  if (indian % 3) {
    console.log(indian + " " + "little,");
  } else {
    console.log(indian + " " + "little Indians");
  }
}
console.log(indian + " little Indian boys.\n");

for (indian = 10; indian > 1; indian--) {
  if (indian != 8 && indian != 5 && indian != 2) {
    console.log(indian + " " + "little,");
  } else {
    console.log(indian + " " + "little Indians");
  }
}
console.log(indian + " little Indian boy.");
