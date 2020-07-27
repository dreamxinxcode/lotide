const tail = require('../tail');
const assertEqual = require('../assertEqual');


const words = ["Yo Yo", "Lighthouse", "Labs"];

assertEqual(words.length, 3);
assertEqual(words[0], 'Lighthouse');
assertEqual(words[1], 'Labs');
