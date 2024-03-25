const animalSounds = 'woof-meow-moo-oink-neigh';
const [dogSound, catSound, cowSound, pigSound, horseSound] = animalSounds.split('-');

const animalNames = 'dog-cat-cow-pig';
const [dog, cat, cow, pig] = animalNames.split('-');

const animalColors = 'brown-black-white';
const [brown, black, white] = animalColors.split('-');

const rainbowInitials = ['R', 'O', 'Y', 'G', 'B', 'V'];
const [R, O, Y, G, B, V] = rainbowInitials;

const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [, , , , , indg] = rainbowColors;

const animalInfo = {
  sound: 'meow',
  name: 'cat',
  color: 'black'
};
const { sound: catSound2, name: catName, color: catColor } = animalInfo;

const kermitInfo = {
  job: 'host',
  partner: 'Miss Piggy',
  songs: ['The Rainbow Connection', 'Bein Green', 'It\'s Not Easy Bein Green', 'Movin Right Along']
};
const { songs: [, song2, , song4], job: kermitJob, partner: kermitPartner } = kermitInfo;

console.log(dogSound, catSound, cowSound, pigSound, horseSound);
console.log(dog, cat, cow, pig);
console.log(brown, black, white);
console.log(R, O, Y, G, B, V);
console.log(indg);
console.log(catSound2, catName, catColor);
console.log(song2, song4, kermitJob, kermitPartner);
