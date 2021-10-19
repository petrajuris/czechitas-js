let vek = 18
let maRad = "víno"
let plnolety = vek >=18

if (plnolety && maRad === "víno") {
    console.log("Nalévám víno.")
} else if (plnolety && maRad === "pivo") {
    console.log("Nalévám pivo.")
} else {
    console.log("Je nám líto, mladistvým nenaléváme.")
    console.log("Zkus to později.")
}
