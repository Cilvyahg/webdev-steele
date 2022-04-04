// ===================================
// ITERATING OVER ARRAYS!
// ===================================

const animals = [
    "Aardvark",
    "Aardwolf",
    "African Elephant",
    "African Tree Pangolin",
    "Alligator",
    "Alpaca",
    "Anteater",
    "Antelope",
    "Ape(s)",
    "Arabian Horse",
    "Armadillo",
    "Arthropod(s)",
    "Asian Elephant",
    "Aye-Aye",
    "Baboon",
    "Badger",
    "Bandicoot",
    "Bangle Tiger",
    "Bat(s)",
    "Bearded Dragon",
    "Beaver",
    "Beluga Whale",
    "Bengal Tiger",
    "Big-Horned Sheep",
    "Billy Goat",
    "Bird(s)",
    "Bison",
    "Black Bear",
    "Black Footed Rhino",
    "Black Howler Monkey",
    "Black Rhino",
    "Blacktip Reef Shark",
    "Blue Shark",
    "Blue Whale",
    "Boar",
    "Bob-Cat",
    "Bonobo",
    "Bottlenose Dolphin",
    "Bottlenose Whale",
    "Brown Bear",
    "Buffalo",
    "Bull",
    "Bull frog",
    "Caiman Lizard",
    "Camel",
    "Capuchin Monkey",
    "Capybara",
    "Caribou",
    "Cat(s)",
    "Cattle",
    "Cheetah",
    "Chimpanzee",
    "Chinchilla",
    "Chipmunk",
    "Common Dolphin",
    "Common Seal",
    "Coral(s) and Anemone(s)",
    "Cougar",
    "Cow(s)",
    "Coyote",
    "Crocodile",
    "Crustacean(s)",
    "Dart Frog",
    "Deer",
    "Degus",
    "Dik-Dik",
    "Dingo",
    "Dog(s)",
    "Dogfish Shark",
    "Dolphin",
    "Donkey",
    "Door Mouse",
    "Dormouse",
    "Draft Horse",
    "Duckbill Platypus",
    "Dugong",
    "Dusky Shark",
    "Elephant",
    "Elephant Seal",
    "Elk",
    "Ermine",
    "Eurasian Lynx",
    "Ferret",
    "Fish(es)",
    "Florida Panther",
    "Flying Fox",
    "Fox",
    "Fresh Water Crocodile",
    "Frog",
    "Fur Seal",
    "Galapagos Land Iguana",
    "Galapagos Shark",
    "Galapagos Tortoise",
    "Gazelle",
    "Gecko",
    "Giant Anteater",
    "Giant Panda",
    "Gibbon",
    "Giraffe",
    "Goat",
    "Gopher",
    "Gorilla",
    "Gray Fox",
    "Gray Nurse Shark",
    "Gray Reef Shark",
    "Gray Whale",
    "Great White Shark",
    "Green Poison Dart Frog",
    "Green Sea Turtle",
    "Grizzly Bear",
    "Groundhog",
    "Guinea Pig",
    "Hairy-Nosed Wombat",
    "Hammerhead Shark",
    "Harbor Porpoise",
    "Harbor Seal",
    "Hare",
    "Harp Seal",
    "Hawaiian Monk Seal",
    "Hedgehog",
    "Hippopotamus",
    "Horn Shark",
    "Horse(s)",
    "Howler Monkey",
    "Humpback Whale",
    "Hyena",
    "Hyrax",
    "Iguana",
    "Iguanodon",
    "Impala",
    "Insect(s)",
    "Irrawaddy Dolphin",
    "Jackal",
    "Jackrabbit",
    "Jaguar",
    "Jellyfish",
    "Kangaroo",
    "Kermode Bear",
    "Killer Whale",
    "Koala",
    "Komodo Dragon",
    "Kookaburra",
    "Lama",
    "Lamb",
    "Lancelet",
    "Least Weasel",
    "Leatherback Sea Turtle",
    "Lemming",
    "Lemon Shark",
    "Lemur",
    "Leopard",
    "Leopard Gecko",
    "Leopard Seal",
    "Leopard Shark",
    "Lion",
    "Llama",
    "Loggerhead Turtles",
    "Lynx",
    "Mako Shark",
    "Manatee",
    "Manta Ray",
    "Mantis",
    "Marbled Salamander",
    "Marmot",
    "Marsupial(s)",
    "Meerkat",
    "Megamouth Shark",
    "Melon-Headed Whale",
    "Miniature Donkey",
    "Mink",
    "Minke Whale",
    "Mole",
    "Mole Salamander",
    "Mollusk(s)",
    "Mongoose",
    "Monitor Lizard",
    "Monk Seal",
    "Monkey",
    "Moose",
    "Mountain Lion",
    "Mouse",
    "Mule",
    "Muskox",
    "Muskrat",
    "Naked Mole Rat",
    "Narwhal",
    "Nautilus",
    "Newt",
    "Northern Right Whale",
    "Nurse Shark",
    "Nutria",
    "Nyala",
    "Ocelot",
    "Octopus",
    "Okapi",
    "Opossum",
    "Orangutan",
    "Orca",
    "Otter",
    "Ox",
    "Panda",
    "Panther",
    "Pig",
    "Pilot Whale",
    "Pine Marten",
    "Platypus",
    "Polar Bear",
    "Porcupine",
    "Porpoise",
    "Possum",
    "Potbellied Pig",
    "Potto",
    "Prairie Dog",
    "Proboscis Monkey",
    "Przewalski's Wild horse",
    "Puma",
    "Pygmy Hippopotamus",
    "Pygmy Right Whale",
    "Pygmy Sperm Whale",
    "Quokkas",
    "Quolls",
    "Rabbit",
    "Raccoon",
    "Rat",
    "Ray",
    "Red Fox",
    "Red Kangaroo",
    "Red Panda",
    "Red-Eyed Tree Frog",
    "Reef Shark",
    "Reindeer",
    "Rhino",
    "Rhinoceros",
    "Right Whale",
    "Ringed Seal",
    "Risso's Dolphin",
    "River Dolphin",
    "Salamander",
    "Sandbar Shark",
    "Scalloped Hammerhead Shark",
    "Sea Lion",
    "Sea Turtles",
    "Seal",
    "Sei Whale",
    "Shark",
    "Sheep",
    "Shortfin Mako Shark",
    "Siberian Tiger",
    "Silky Shark",
    "Skink",
    "Skunk",
    "Slender Loris",
    "Sloth",
    "Sloth Bear",
    "Snake(s)",
    "Snow Fox",
    "Snow Hare",
    "Snow Leopard",
    "Snow Monkey",
    "Somali Wild Ass",
    "Spectacled Bear",
    "Sperm Whale",
    "Spider Monkey",
    "Spiny Dogfish Shark",
    "Spotted Dolphin",
    "Squirrel",
    "Star-Nosed Mole",
    "Stellar Sea Lion",
    "Striped Dolphin",
    "Sun Bear",
    "Takin",
    "Tamarin",
    "Tapir",
    "Tasmanian Devil",
    "Tasmanian Tiger",
    "Terrapin",
    "Thresher Shark",
    "Tiger",
    "Tiger Salamander",
    "Tiger Shark",
    "Topi",
    "Tortoise",
    "Tree Frog",
    "Turtle",
    "Uakari",
    "Vampire Bat",
    "Vancouver Island Marmot",
    "Vervet Monkey",
    "Vicuna",
    "Vole",
    "Wallaby",
    "Walrus",
    "Warthog",
    "Water Buffalo",
    "Weasel",
    "Whale Shark",
    "Whale(s)",
    "White Rhino",
    "White Tailed Deer",
    "White-Beaked Dolphin",
    "Whitetip Reef Shark",
    "Wildcat",
    "Wildebeest",
    "Wobbegong Shark",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodchuck",
    "Yak",
    "Yellow-Bellied Marmot",
    "Zebra",
    "Zebu",
    "Zorilla"
]

// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i])
// }

// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(animals[i])
// }


// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i]);
// }


for (let i = animals.length - 1; i >= 0; i--) {
    console.log(animals[i]);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i < people.length; i++) {
    console.log(i + 1, people[i].toUpperCase())
}






// FOR ... OF LOOP

// exercise with Dev Ed about For Loop and While Loop

// const names = ["Ed", "John", "Maria", "Eliza", "Burrito", "Harry", "Potter"];

// for (name of names) {
//     console.log(`hello there ${name}`);
// }

const menu = ["Foccacia", "Bruschetta", "Garlic Bread", "Caprese Salad", "Pizza", "Pasta", "Risotto"];
for (const item of menu) console.log(item);

for (const item of menu.entries()) {
    console.log(item);
}

console.log([menu.entries()]);




//Nested loops

for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`)
    for (let j = 1; j < 4; j++) {
        console.log(`J is: ${j}`)
    }
}

const names = ["John", "Bob", "Mary", "Joe"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    // if (i === 3) break;
}

// easier the write by using for of loop. it is deconstructing the array.
// A for of loop is slower than a for loop.
for (name of names) {
    console.log(name);
}

//object  - key value pairs
const user = {
    "firstName": "John",
    "lastName": "Doe"
};

// for in loop

for (key in user) console.log(user[key]);

let i = 0; 
while (i < 10) {
    console.log(i);
    i++; 
if (i === 5) break;
}