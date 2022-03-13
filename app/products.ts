export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  url: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'Johnny the Walrus',
    price: 17.99,
    description: 'From Daily Wire personality and bestselling children\'s book author Matt Walsh comes a timely tale of innocence, identity, and imagination. Johnny is a little boy with a big imagination. One day he pretends to be a big scary dinosaur, the next day he\’s a knight in shining armor or a playful puppy. But when the internet people find out Johnny likes to make-believe, he\’s forced to make a decision between the little boy he is and the things he pretends to be — and he\’s not allowed to change his mind. ',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51mYaectNZL._SX497_BO1,204,203,200_.jpg',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Anne of Green Gables',
    price: 1.99,
    description: 'The classic Anne of Green Gables; inspiration for the Netflix original series Anne With an E.Anne of Green Gables is a 1908 novel by L.M. Montgomery. it has been considered a classic children\'s novel since the mid-twentieth century. Set in the late 19th century, the novel recounts the adventures of Anne Shirley, an 11-year-old orphan girl, who is mistakenly sent to two middle-aged siblings, Matthew and Marilla Cuthbert, who had originally intended to adopt a boy to help them on their farm in the fictional town of Avonlea on Prince Edward Island, Canada. The novel recounts how Anne makes her way through life with the Cuthberts, in school, and within the town.',
    url: 'https://m.media-amazon.com/images/I/51PFJObJEWL.jpg',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'The Lorax',
    price: 9.99,
    description: 'Dr. Seuss’s beloved story teaches kids to treat the planet with kindness and stand up and speak up for others. Experience the beauty of the Truffula Trees and the danger of taking our earth for granted in a story that is timely, playful, and hopeful. The book’s final pages teach us that just one small seed, or one small child, can make a difference. ',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51VXGZtC7dL._SX367_BO1,204,203,200_.jpg',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'How to Catch a Leprechaun',
    price: 5.99,
    description: 'You\'ve been planning night and day, and finally you\'ve created the perfect trap with shamrocks, pots of gold, and rainbows galore! Now all you need to do is wait. Is this the year you\'ll finally catch the leprechaun? Start a St. Patrick\'s Day tradition with this fun and lively children\'s picture book and get inspired to build leprechaun traps of your own at home or in the classroom! Laugh along in this zany story for kids that blends STEAM concepts with hilarious rhymes and vibrant illustrations! How to catch a leprechaun? It\'s tougher than you think! He\'ll turn your whole house upside down. He\'s quicker than a wink!',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51jayVNubpL._SX258_BO1,204,203,200_.jpg',
    rating: 2.8,
  },
  {
    id: 5,
    name: 'Wishes',
    price: 15.99,
    description: 'Wishes tells the powerful, honest story about one Vietnamese family\'s search for a new home on the other side of the world, and the long-lasting and powerful impact that makes on one of the youngest members of the family. Inspired by actual events in the author\'s life, this is a narrative that is both timely and timeless.',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51Z+EhdXYFS._SX258_BO1,204,203,200_.jpg',
    rating: 4.8,
  },
  {
    id: 6,
    name: 'Wonder Walkers',
    price: 10.99,
    description: 'When two curious kids embark on a "wonder walk", they let their imaginations soar as they look at the world in a whole new light.',
    url: 'https://images-na.ssl-images-amazon.com/images/I/61iUws4V8mL._SY449_BO1,204,203,200_.jpg',
    rating: 4.9,
  },
  {
    id: 7,
    name: 'Watercress',
    price: 17.99,
    description: 'At first, she\'s embarrassed. Why can\'t her family get food from the grocery store? But when her mother shares a story of her family\'s time in China, the girl learns to appreciate the fresh food they foraged. Together, they make a new memory of watercress.',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51zZys5UfEL._SY398_BO1,204,203,200_.jpg',
    rating: 4.9,
  },
  {
    id: 8,
    name: 'Mel Fell',
    price: 12.99,
    description: ' is an enchanting picture book exploring the relationship between childhood and nature. In this simple yet profound story, one child experiences a flower with all five senses—from its color to its fragrance to the entire universe it evokes—revealing how a single flower can expand one\'s perspective in incredible ways',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51vAb2kwmkL._SY401_BO1,204,203,200_.jpg',
    rating: 4.8,
  },
  {
    id: 9,
    name: 'Look, Listen, Taste, Touch, and Smell: Learning About Your Five Senses (The Amazing Body)',
    price: 33.26,
    description: 'Seeing, hearing, smelling, tasting, touching ― our bodies do all kinds of amazing things! In this delightful and educational picture book, author Pamela Hill Nettlet, along with illustrator Becky Shipe, give children an exciting, colorful introduction to the five sense ― sight, hearing, smell, taste and touch ― and the organs that perform these functions. A must for any emerging science fan.',
    url: 'https://images-na.ssl-images-amazon.com/images/I/61cnO35uP7L._SY497_BO1,204,203,200_.jpg',
    rating: 4.7,
  },
  {
    id: 10,
    name: 'Have You Ever Seen a Flower?',
    price: 14.39,
    description: 'Have You Ever Seen a Flower? is an enchanting picture book exploring the relationship between childhood and nature. In this simple yet profound story, one child experiences a flower with all five senses—from its color to its fragrance to the entire universe it evokes—revealing how a single flower can expand one\'s perspective in incredible ways.',
    url: 'https://images-na.ssl-images-amazon.com/images/I/61bKZivMA2L._SY431_BO1,204,203,200_.jpg',
    rating: 4.4,
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/