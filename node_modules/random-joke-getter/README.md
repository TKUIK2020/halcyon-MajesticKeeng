# npm-joke-getter-module

[![MIT License](https://img.shields.io/npm/l/random-joke-getter.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/random-joke-getter.svg)](https://github.com/akiyowind/npm-joke-getter-module)
[![downloads](https://img.shields.io/npm/dm/random-joke-getter.svg)](https://github.com/akiyowind/npm-joke-getter-module)

An npm joke module for the hehe and haha'rs out there :). 

## Install
`     $ npm i --save random-joke-getter`



## Usage

```javascript
var joker = require('random-joke-getter');
 
// Get a random dad joke
joker.getDadJoke (function(joke) {
    //=> console.log(joke);
});
 
// Get a random programming joke
joker.getProgrammingJoke (function(joke) {
    //=> console.log(joke);
});

// Get a random joke
joker.getRandomJoke (function(joke) {
  //=> console.log(joke);
});
```
## Examples and Formatting

Dad jokes are formatted on a single line 

Example: 

`Where do rabbits go after they get married? On a bunny-moon.`

Programming and random jokes are formatted with a newline in between the setup and punchline.

Programming example: 

```
There are 10 types of people in this world... 

Those who understand binary and those who don't
```

Random joke example:

```
Don't look at the eclipse through a colander.

You'll strain your eyes.
```

## Contributions

If you would like to submit some new jokes, please send a request :). I'd be happy to merge after I vet them.

## Credits

Dad jokes taken from "Dad Joke API" (https://icanhazdadjoke.com/)  
Random and programming jokes taken from "Official Joke API" (https://github.com/15Dkatz/official_joke_api) 


## License
MIT © [Adrian Tran](https://github.com/adrianmoo2/npm-joke-getter-module/blob/master/LICENSE)



