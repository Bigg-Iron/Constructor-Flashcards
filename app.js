var inquirer = require('inquirer');


console.log(`

Hi, welcome to Node Hangman! Type a key to guess a letter!

For Help, type 'H' .

`);

inquirer.prompt([
    {
      type: 'expand',
      message: 'Guess a letter: ',
      name: 'Letter guessed',
      choices: [
        {
          key: 'a',
          name: 'a',
          value: 'a'
        },
        {
          key: 'b',
          name: 'b',
          value: 'b'
        },
        {
          key: 'c',
          name: 'c',
          value: 'c'
        },
        {
          key: 'd',
          name: 'd',
          value: 'd'
        },
        {
          key: 'e',
          name: 'e',
          value: 'e'
        },
        {
          key: 'f',
          name: 'f',
          value: 'f'
        },
        {
          key: 'g',
          name: 'g',
          value: 'g'
        },
        // {
        //   key: 'h',
        //   name: 'h',
        //   value: 'h'
        // },
        {
          key: 'i',
          name: 'i',
          value: 'i'
        },
        {
          key: 'j',
          name: 'j',
          value: 'j'
        },
        {
          key: 'k',
          name: 'k',
          value: 'k'
        },
        {
          key: 'l',
          name: 'l',
          value: 'l'
        },
        {
          key: 'm',
          name: 'm',
          value: 'm'
        },
        {
          key: 'n',
          name: 'n',
          value: 'n'
        },
        {
          key: 'o',
          name: 'o',
          value: 'o'
        },
        {
          key: 'p',
          name: 'p',
          value: 'p'
        },
        {
          key: 'q',
          name: 'q',
          value: 'q'
        },
        {
          key: 'r',
          name: 'r',
          value: 'r'
        },
        {
          key: 's',
          name: 's',
          value: 's'
        },
        {
          key: 't',
          name: 't',
          value: 't'
        },
        {
          key: 'u',
          name: 'u',
          value: 'u'
        },
        {
          key: 'v',
          name: 'v',
          value: 'v'
        },
        {
          key: 'w',
          name: 'w',
          value: 'w'
        },
        {
          key: 'x',
          name: 'x',
          value: 'x'
        },
        {
          key: 'y',
          name: 'y',
          value: 'y'
        },
        {
          key: 'z',
          name: 'z',
          value: 'z'
        },
      ]
    }
  ]).then(function (answers) {
    console.log(JSON.stringify(answers, null, '  '));
  });
