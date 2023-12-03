import realInput from './day2-input.js';

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

for(i=0;i<input.length;i++) {
  possible = true;
  input[i].forEach(x=>{if((x[0]>12)||(x[1]>13)||(x[2]>14))possible=false});
  if(possible){accum+=(i+1)};
}
console.log(accum);

// PART 2
