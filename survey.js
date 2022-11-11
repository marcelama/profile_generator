const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :\) ' , (answerName) => {
  rl.question('What\'s an activity you like doing? ', (answerHobby) => {
    rl.question('What do you listen to while doing that? ', (answerListen) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answerMeal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answerFood) => {
          rl.question('Which sport is your absolute favourite? ', (answerSport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answerSP) => {
              console.log(`Hello, my name is ${answerName}. I enjoy ${answerHobby}, and  while ${answerHobby}, I like to listen to ${answerListen}. My favourite meal is ${answerMeal}, and I love having ${answerFood}. My favourite sport is ${answerSport} - but I like trying new things! I think my superpower is ${answerSP}. Nice meeting you! :)`);
              rl.close();
            });
          });
        });
      });
    });
  });        
});

// rl.question('What\'s an activity you like doing?', (answerHobby) => {
//   console.log(`I enjoy ${answerHobby}.`);

//   rl.close();
// });

// rl.question('What do you listen to while doing that?', (answerListen) => {
//   console.log(`While  ${answerHobby}, I like to listen to ${answerListen}.`);

//   rl.close();
// });

// rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answerMeal) => {
//   console.log(`${answerMeal} is my favourite meal.`);

//   rl.close();
// });

// rl.question('What\'s your favourite thing to eat for that meal?', (answerFood) => {
//   console.log(`For ${answerMeal} I love having ${answerFood}.`);

//   rl.close();
// });

// rl.question('Which sport is your absolute favourite?', (answerSport) => {
//   console.log(`My favourite sport is ${answerSport}.`);

//   rl.close();
// });


// rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answerSP) => {
//   console.log(`I think my superpower is ${answerSP}!`);

//   rl.close();
// });