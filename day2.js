import realInput from './input2.js';

// FORMATTING THE INPUT:

let formatting = realInput.split('\n').map(x=>x.substring(x.indexOf(":")+2)).map(x=>x.split('; ')).map(x=>x.map(y=>y.split(', ')));

formatting.forEach(g=>{g.forEach(r=>{
  if(r.length<3){['0 red','0 green','0 blue'].forEach(x=>{
    if(!(r.some(h=>(h.substring(h.length-1)==x.substring(x.length-1)))))r.push(x)
  })};
  r.sort((a,b)=>{
    const lookup={d:0,n:1,e:2};
    return lookup[a.substring(a.length-1)]-lookup[b.substring(b.length-1)];
  });
})});

let input = formatting.map(x=>x.map(y=>y.map(z=>parseInt(z))));
let accum = 0;
let possible;

for(let i=0;i<input.length;i++) {
  possible = true;
  input[i].forEach(x=>{if((x[0]>12)||(x[1]>13)||(x[2]>14))possible=false});
  if(possible){accum+=(i+1)};
}
console.log(accum);

// PART 2

const transpose=(matrix)=>matrix[0].map((_,i)=>matrix.map(r=>r[i])); // [[1,2,3],[4,5,6]] <=> [[1,4],[2,5],[3,6]]
input=input
.map(x=>transpose(x)) // inside-out-ify all "game" arrays,
.map(x=>x.map(y=>Math.max(...y))) // take the max value from "r/g/b" arrays (former round arrays),
.map(x=>x.reduce((a,v)=>a*v,1)) // multiply in all "game-maxes" arrays,
.reduce((a,v)=>a+v,0); // and add all numbers
console.log(input);