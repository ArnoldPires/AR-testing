const inventors = [
  { firstName: "Albert", lastName: "Einstein", born: 1879, died: 1955 },
  { firstName: "Isaac", lastName: "Newton", born: 1643, died: 1727 },
  { firstName: "Galileo", lastName: "Galilei", born: 1564, died: 1642 },
  { firstName: "Marie", lastName: "Curie", born: 1867, died: 1934 },
  { firstName: "Johannes", lastName: "Kepler", born: 1571, died: 1630 },
  { firstName: "Nicolaus", lastName: "Copernicus", born: 1473, died: 1543 },
  { firstName: "Max", lastName: "Planck", born: 1858, died: 1947 },
  { firstName: "Katherine", lastName: "Blodgett", born: 1898, died: 1979 },
  { firstName: "Ada", lastName: "Lovelace", born: 1815, died: 1852 },
  { firstName: "Sarah E.", lastName: "Goode", born: 1855, died: 1905 },
  { firstName: "Lise", lastName: "Meitner", born: 1878, died: 1968 },
  { firstName: "Hanna", lastName: "Hammarström", born: 1829, died: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventFifteen = inventors.filter(function(inventor){
  if(inventor.born >= 1500 && inventor.born < 1600) {
    return true;
  }
  document.getElementById("one").innerHTML = "Galilieo Galilei: " + " Born: 1564 "+"Died: 1642";
  document.getElementById("onep").innerHTML = "Johannes Kepler:" + " Born: 1571 " + "Died: 1630";
});
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const names = inventors.map(inventor => inventor.firstName + ' ' + inventor.lastName);
console.table(names)
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const oldToYoung = inventors.sort(function(firstPerson, secondPerson){
  if(firstPerson.born > secondPerson.born) {
    return 1;
  } else {
    return -1;
  }
});
console.table(oldToYoung)
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalborn = inventors.reduce((total, inventor) => {
  return total + (inventor.died - inventor.born)
}, 0)
console.table('The total amount of years the inventors were alive, if added together: ' + totalborn)
// 5. Sort the inventors by years lived
const oldestInventor = inventors.sort(function(oldestPerson, youngestPerson){
  const lastPerson = youngestPerson.died - youngestPerson.born;
  const nextPerson = oldestPerson.died - oldestPerson.born;
  if(lastPerson > nextPerson) {
    return - 1;
  } else {
    return 1;
  }
});
console.table(oldestInventor)
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
 const links = Array.from(document.querySelectorAll(".mw-category a"));
 const de = links
   .map((link) => link.textContent) // extracting out only string
   .filter((boulevardName) => boulevardName.includes("de"));

 console.log(de);
 console.log(
"1: " + "Boulevard de l'Amiral-Bruix " +
"2: " + "Boulevard des Capucines " +
"3: " + "Boulevard de la Chapelle " +
"4: " + "Boulevard de Clichy " +
"5: " + "Boulevard de l'Hôpital " +
"6: " + "Boulevard des Italiens " +
"7: " + "Boulevard de la Madeleine " +
"8: " + "Boulevard de Magenta " +
"9: " + "Boulevard Marguerite-de-Rochechouart " +
"10: " + "Boulevard de Sébastopol " +
"11: " + "Boulevard de Strasbourg " +
"12: " + "Boulevard de la Zone");
// 7. sort Exercise
// Sort the people alphabetically by last name
const sortToLastName = people.sort((personsLastName, nextPersonsLastName) => {
  const [pLast, pFirst] = personsLastName.split(', ');
  const [pepLast, pepFirst] = nextPersonsLastName.split(', ');
    if(pLast > pepFirst) {
      return 1;
    } else {
      return -1;
    }
});
console.table(sortToLastName)
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
const vehicle = data.reduce(function(object, item) {
  if(!object[item]) {
    object[item] = 0;
  }
  object[item]++;
  return object;
}, {});
console.table(vehicle);
