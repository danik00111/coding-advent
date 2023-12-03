import input from './input3.js';
let bruh = input.split('\n');
let testCase = `\
....52....7.....#...
...@.........&....47
.......3.....29....6
...9.....94....$....
...^37........7.....\
`
bruh = testCase.split('\n');
const num=['0','1','2','3','4','5','6','7','8','9'];
const notGear=['0','1','2','3','4','5','6','7','8','9','.'];
let status;
// possible statuses: 'nothing', 'number', 'endofnum';
console.log(bruh);
for(let c=0;c<bruh.length;c++){
  status = 'nothing';
  for(let r=0;r<bruh[0].length;r++){
    
  }
}